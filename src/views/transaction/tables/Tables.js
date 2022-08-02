import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  // CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import ReactPaginate from 'react-paginate'
// import { DocsExample } from 'src/components'

const token = localStorage.getItem('token_key')
let limit = 10

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/history/transactions?page=1&limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result
  } catch (err) {
    console.log('err')
  }
}
const Tables = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)
  // const [pageNumber, setPageNumber] = useState()

  async function getPage() {
    const data = await getSignature()
    console.log(data)
    const total = data.data.res.total
    setPage(Math.ceil(total / limit))
    setData(data)
  }

  useEffect(() => {
    getPage()
    //getEdit()
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
    setPage(data.selected)
    let currentPage = data.selected + 1
    const pageFormServer = await fetchPage(currentPage)
    setData(pageFormServer)
  }

  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      console.log(data)
      setData(data)
    }
    ss()
  }, [])
  console.log('data ne', data)
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>History Transaction Table</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NickName</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">From</CTableHeaderCell>
                    <CTableHeaderCell scope="col">To</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data?.data?.res?.data?.data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{item.NickName}</CTableHeaderCell>
                      <CTableDataCell scope="row">
                        {(() => {
                          switch (item.type) {
                            case 'swap_to_point':
                              return 'Đổi token sang điểm'
                            case 'swap_to_token':
                              return 'Đổi điểm sang token'
                            default:
                              return ''
                          }
                        })()}
                      </CTableDataCell>
                      <CTableHeaderCell scope="row">
                        {(() => {
                          switch (item.type) {
                            case 'swap_to_point':
                              return `${item.tokenAmount} / ${item.pointAmount}`
                            case 'swap_to_token':
                              return `${item.pointAmount} / ${item.tokenAmount}`
                            default:
                              return ''
                          }
                        })()}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {item.from.slice(0, 7)}...{item.from.slice(-5)}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        {item.to.slice(0, 7)}...{item.to.slice(-5)}
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="row">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          height={30}
                          width={30}
                        >
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </CTableHeaderCell>
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
export default Tables
