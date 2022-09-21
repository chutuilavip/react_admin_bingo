import React from 'react'
import { CSVLink } from 'react-csv'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { LoadingOutlined, FileExclamationOutlined } from '@ant-design/icons'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CContainer,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import ReactPaginate from 'react-paginate'

import './style.css'

const token = localStorage.getItem('token_key')

let limit = 10

const DataPoint = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  const [pageNumber, setPageNumber] = useState()
  const [date, setDate] = useState({
    start: '',
    end: '',
  })

  //search

  const getSignature = async () => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/admin/data-point`,
        // url: `${process.env.REACT_APP_URL_API}/api/user?page=1&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          start: date.start,
          end: date.end,
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
        url: `${process.env.REACT_APP_URL_API}/api/admin/data-point`,
        // url: `${process.env.REACT_APP_URL_API}/api/user?page=${currentPage}&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(result)
      return result
    } catch (err) {
      console.log('err')
    }
  }
  const handlePageClick = async (data) => {
    setPageNumber(data.selected)
    let currentPage = data.selected + 1
    const pageFormServer = await fetchPage(currentPage)
    setData(pageFormServer)
  }

  //export

  const headers = [
    { label: 'Avatar_index', key: 'Avatar_index' },
    { label: 'Cash', key: 'Cash' },
    { label: 'Gold', key: 'Gold' },
    { label: 'NickName', key: 'NickName' },
    { label: 'UserCode', key: 'UserCode' },
    { label: 'UserID', key: 'UserID' },
    { label: 'accountExp', key: 'accountExp' },
    { label: 'accountLevel', key: 'accountLevel' },
    { label: 'isBlock', key: 'isBlock' },
    { label: 'lastAccessDate', key: 'lastAccessDate' },
    { label: 'leagueTier', key: 'leagueTier' },
    { label: 'loginKey', key: 'loginKey' },
    { label: 'pendingGold', key: 'pendingGold' },
    { label: 'registerDate', key: 'registerDate' },
    { label: 'uID', key: 'uID' },
    { label: 'v', key: 'uID' },
  ]
  const csvReport = {
    data: data?.data?.res?.data?.data || '',
    headers: headers,
    filename: 'Data_point.csv',
  }

  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CContainer>
                <CRow className="align-items-start">
                  <CCol>
                    <strong>Account Table</strong>
                  </CCol>
                  <CCol>
                    <div className="px-1">
                      <div className="d-flex">
                        <CFormInput
                          placeholder=""
                          type="date"
                          onChange={(e) => setDate({ ...date, start: e.target.value })}
                        />
                      </div>
                    </div>
                  </CCol>
                  <CCol>
                    <div className="px-1">
                      <div className="d-flex">
                        <CFormInput
                          placeholder=""
                          type="date"
                          onChange={(e) => setDate({ ...date, end: e.target.value })}
                        />
                      </div>
                    </div>
                  </CCol>
                  <CCol>
                    <CButton color="success" variant="outline" onClick={getPage}>
                      Search
                    </CButton>
                  </CCol>
                  <CCol>
                    <CButton color="success" variant="outline">
                      <CSVLink {...csvReport}>Export to CSV</CSVLink>
                    </CButton>
                  </CCol>
                </CRow>
              </CContainer>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nick Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gold</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Turn</CTableHeaderCell>
                    <CTableHeaderCell scope="col">UserID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">accountExp</CTableHeaderCell>
                    <CTableHeaderCell scope="col">earnGoldToday</CTableHeaderCell>
                    <CTableHeaderCell scope="col">lastAccessDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">registerDate</CTableHeaderCell>
                    <CTableHeaderCell scope="col">uID</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data?.data?.res?.data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell scope="row">{index}</CTableDataCell>
                      <CTableDataCell scope="row">{item.Gold}</CTableDataCell>
                      <CTableDataCell scope="row">{item.NickName}</CTableDataCell>
                      <CTableDataCell scope="row">{item.Turn}</CTableDataCell>
                      <CTableDataCell scope="row">{item.UserID}</CTableDataCell>
                      <CTableDataCell scope="row">{item.accountExp}</CTableDataCell>
                      <CTableDataCell scope="row">{item.earnGoldToday}</CTableDataCell>
                      <CTableDataCell scope="row">{item.lastAccessDate}</CTableDataCell>
                      <CTableDataCell scope="row">{item.registerDate}</CTableDataCell>
                      <CTableDataCell scope="row">{item.uID}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
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

export default DataPoint
