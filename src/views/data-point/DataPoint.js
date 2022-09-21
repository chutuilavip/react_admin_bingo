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

  //search

  const getSignature = async () => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/user?page=1&limit=${limit}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {},
      })
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
    console.log(data)
    getPage()
  }, [limit])

  const fetchPage = async (currentPage) => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/user?page=${currentPage}&limit=${limit}`,
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
  const dataCsv = [
    { firstName: 'Warren', lastName: 'Morrow', email: 'sokyt@mailinator.com', age: '36' },
    { firstName: 'Gwendolyn', lastName: 'Galloway', email: 'weciz@mailinator.com', age: '76' },
    { firstName: 'Astra', lastName: 'Wyatt', email: 'quvyn@mailinator.com', age: '57' },
    { firstName: 'Jasmine', lastName: 'Wong', email: 'toxazoc@mailinator.com', age: '42' },
    { firstName: 'Brooke', lastName: 'Mcconnell', email: 'vyry@mailinator.com', age: '56' },
    { firstName: 'Christen', lastName: 'Haney', email: 'pagevolal@mailinator.com', age: '23' },
    { firstName: 'Tate', lastName: 'Vega', email: 'dycubo@mailinator.com', age: '87' },
    { firstName: 'Amber', lastName: 'Brady', email: 'vyconixy@mailinator.com', age: '78' },
    { firstName: 'Philip', lastName: 'Whitfield', email: 'velyfi@mailinator.com', age: '22' },
    { firstName: 'Kitra', lastName: 'Hammond', email: 'fiwiloqu@mailinator.com', age: '35' },
    { firstName: 'Charity', lastName: 'Mathews', email: 'fubigonero@mailinator.com', age: '63' },
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
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Nick Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Account Level</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Cash</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Gold</CTableHeaderCell>
                        <CTableHeaderCell scope="col">State</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data?.data?.res?.data?.data.map((item, index) => (
                        <CTableRow key={item.id}>
                          <CTableDataCell scope="row">{index}</CTableDataCell>
                          <CTableDataCell scope="row">{item.NickName}</CTableDataCell>
                          <CTableDataCell colSpan="row">
                            {item.UserID.slice(0, 7)}...{item.UserID.slice(-5)}
                          </CTableDataCell>
                          <CTableDataCell>{item.accountLevel}</CTableDataCell>
                          <CTableDataCell>{item.Cash}</CTableDataCell>
                          <CTableDataCell>{item.Gold}</CTableDataCell>
                          <CTableDataCell>{item.isBlock === 1 ? 'Block' : 'Active'}</CTableDataCell>
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

export default DataPoint
