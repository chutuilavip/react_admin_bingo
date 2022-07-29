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
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
// import { set } from 'core-js/core/dict'
import ReactPaginate from 'react-paginate'

import "./style.css"

const token = localStorage.getItem('token_key')

let limit = 10

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}api/user?page=1&limit=${limit}`,
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

  useEffect(() => {
    async function getPage() {
      const data = await getSignature()
      console.log(data)

      const total = data.data.res.total;

      setPage(Math.ceil(total / limit))

      setData(data)
    }

    getPage()
  }, [limit])

  const fetchPage = async (currentPage) => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}api/user?page=${currentPage}&limit=${limit}`,
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
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const pageFormServer = await fetchPage(currentPage)

    setData(pageFormServer)
  }

  console.log('data ne', data)

  return (
    // console.log(dataU)
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Account Table</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nick Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Account Level</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cash</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gold</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data?.data?.res?.data?.data.map((item) => (
                    <CTableRow key={item.id}>
                      <CTableDataCell scope="row">{item.id}</CTableDataCell>
                      <CTableDataCell scope="row">{item.NickName}</CTableDataCell>
                      <CTableDataCell colSpan="row">{item.UserID}</CTableDataCell>
                      <CTableDataCell>{item.accountLevel}</CTableDataCell>
                      <CTableDataCell>{item.Cash}</CTableDataCell>
                      <CTableDataCell>{item.Gold}</CTableDataCell>
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
