import React from 'react'
import { useState, useEffect } from 'react'
import './style.css'
import { LoadingOutlined, FileExclamationOutlined } from '@ant-design/icons'

import axios from 'axios'
import {
  CForm,
  CContainer,
  CModalFooter,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CFormSelect,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import ReactPaginate from 'react-paginate'

const token = localStorage.getItem('token_key')

let limit = 10

const Tables = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [detail, setDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([])
  const [nickname, setNickname] = useState('')
  const [stateResult, setStateResult] = useState('')

  // handle detail

  const handleDetail = (data) => {
    setDataDetail(data)
    setDetail(!detail)
  }
  const getSignature = async () => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/history/plays?page=1&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          nickname: nickname,
          iswin: stateResult,
        },
      })
      console.log(result)
      return result
    } catch (err) {
      console.log('err')
    }
  }
  async function getPage() {
    const data = await getSignature()
    const total = data.data.res.total
    setPage(Math.ceil(total / limit))
    setData(data)
  }

  useEffect(() => {
    getPage()
  }, [limit])

  const fetchPage = async (currentPage) => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/history/plays?page=${currentPage}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return result
    } catch (err) {
      console.log('err')
    }
  }

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1
    const pageFormServer = await fetchPage(currentPage)
    setData(pageFormServer)
  }

  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      setData(data)
    }
    ss()
  }, [])
  const handleSelectAction = (e) => {
    setStateResult(e.target.value)
  }
  return (
    <div>
      <CModal className="modal_detail" visible={detail} onClose={() => setDetail(false)}>
        <CModalHeader>
          <CModalTitle>History Detail</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs={17}>
              <CCard className="mb-4">
                <CCardBody>
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Data</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell scope="row">ID</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.tID}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">User ID</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.uID}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">Is Win?</CTableDataCell>
                        <CTableDataCell scope="row">
                          {dataDetail.is_win === 0 ? 'Lose' : 'Win'}
                        </CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">Reward</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.reward}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">Fee</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.fee}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">Total Score</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.total_score}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableDataCell scope="row">Nick Name</CTableDataCell>
                        <CTableDataCell scope="row">{dataDetail.NickName}</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDetail(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>History Play game</strong>
              <CContainer>
                <div className="row justify-content-md-center">
                  <CCol xs lg={2}></CCol>
                  <CCol md="auto">
                    <CForm>
                      <CFormInput
                        type="email"
                        id="exampleFormControlInput1"
                        placeholder="NickName"
                        aria-describedby="exampleFormControlInputHelpInline"
                        onChange={(event) => setNickname(event.target.value)}
                      />
                    </CForm>
                  </CCol>
                  <CCol xs lg={2}>
                    <CFormSelect
                      aria-label="Default select example"
                      onChange={handleSelectAction}
                      options={[
                        'Win/Lose',
                        { label: 'Win', value: '1' },
                        { label: 'Lose', value: '0' },
                      ]}
                    />
                  </CCol>
                  <CCol xs lg={2}>
                    <CButton color="primary" size="sm" onClick={getPage}>
                      Search
                    </CButton>
                  </CCol>
                </div>
              </CContainer>
            </CCardHeader>

            <CCardBody>
              {data?.data?.res?.data?.data ? (
                data?.data?.res?.data?.total === 0 ? (
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <FileExclamationOutlined style={{ color: '#ccc', fontSize: 50, margin: 20 }} />
                    <p style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                      No data
                    </p>
                  </div>
                ) : (
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                        <CTableHeaderCell scope="col">NickName</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Vs Player</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Score</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Win/Lose</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Fee</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data?.data?.res?.data?.data.map((item, index) => (
                        <CTableRow key={index}>
                          <CTableHeaderCell scope="row">{item.tID}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.NickName}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.vs_nickname}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.total_score}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">
                            {item.is_win === 0 ? 'Lose' : 'Win'}
                          </CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.logdate}</CTableHeaderCell>
                          <CTableHeaderCell scope="row">{item.fee}</CTableHeaderCell>
                          <CTableDataCell>
                            <svg
                              onClick={() => handleDetail(item)}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              height={30}
                              width={30}
                              style={{ cursor: 'pointer' }}
                            >
                              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            {/* </button> */}
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                )
              ) : (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <LoadingOutlined style={{ color: '#ccc', fontSize: 50, margin: 20 }} />
                  <p style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    Loading...
                  </p>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <ReactPaginate
        previousLabel={'< Previous'}
        nextLabel={'Next >'}
        breakLabel={'...'}
        pageCount={page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  )
}
export default Tables
