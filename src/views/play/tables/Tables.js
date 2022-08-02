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
      url: `${process.env.REACT_APP_URL_API}/api/history/plays?page=1&limit=${limit}`,
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
    // setPage(data.selected)
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
  console.log('data ne', data)
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>History Play game</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NickName</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Scope</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Time</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data?.data?.res?.data?.data.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{item.tID}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{item.NickName}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{item.total_score}</CTableHeaderCell>
                      <CTableHeaderCell scope="row">{item.logdate}</CTableHeaderCell>
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
