import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Form_Edit from 'src/views/pages/login/Form_Edit'
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
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
// import { set } from 'core-js/core/dict'
import ReactPaginate from 'react-paginate'

import './style.css'

const token = localStorage.getItem('token_key')

let limit = 10

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/user?page=1&limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result
  } catch (err) {
    console.log('err')
  }
}

// const getEdit = async (id) => {
//   try {
//     const result = await axios({
//       method: `Get`,
//       url: `${process.env.REACT_APP_URL_API}/api/user/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     return result
//   } catch (err) {
//     console.log('err')
//   }
// }

const Tables = () => {
  const [data, setData] = useState([])

  const [page, setPage] = useState(0)
  const [form, setForm] = useState(false)
  const [dataForm, setDataForm] = useState()
  const [state, setState] = useState()
  useEffect(() => {
    async function getPage() {
      const data = await getSignature()
      console.log(data)

      const total = data.data.res.total

      setPage(Math.ceil(total / limit))

      setData(data)
    }

    getPage()
  }, [limit])

  const getEdit = async (id) => {
    try {
      const result = await axios({
        method: `Get`,
        url: `${process.env.REACT_APP_URL_API}/api/user/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setDataForm(result)
      console.log(result)
      return result
    } catch (err) {
      console.log('err')
    }
  }
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

  const handleDetele = (id) => {
    //console.log('xóa nè')
  }
  const handleEdit = async (id) => {
    await getEdit(id)

    setForm(!form)
  }
  const handleOnchageNickName = () => {}
  const handlePageClick = async (data) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

    const pageFormServer = await fetchPage(currentPage)

    setData(pageFormServer)
  }

  const handleChange = (event) => setState(0)
  const [visible, setVisible] = useState(false)
  return (
    // console.log(dataU)
    <div>
      {/* <CButton onClick={() => setVisible(!visible)}>Launch static backdrop modal</CButton> */}
      <CModal visible={form} onClose={() => setForm(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol xs={12}>
            <CFormInput
              label="Nick Name"
              placeholder="1234 Main St"
              onChange={handleOnchageNickName}
              // defaultValue={dataForm.data.cash}
              defaultValue={dataForm?.data?.res?.data?.NickName}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="Cash"
              placeholder="1234 Main St"
              defaultValue={dataForm?.data?.res?.data?.Cash}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="Gold"
              placeholder="1234 Main St"
              defaultValue={dataForm?.data?.res?.data?.Gold}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="isBlock"
              placeholder="1234 Main St"
              defaultValue={dataForm?.data?.res?.data?.isBlock}
            />
          </CCol>
          <CCol md={12}>
            <CFormSelect
              id="inputState"
              label="State"
              value={dataForm?.data?.res?.data?.isBlock}
              onChange={handleChange}
            >
              <option>Status</option>
              <option value="0">Active</option>
              <option value="1">Block</option>
            </CFormSelect>
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="Avatar index"
              placeholder="1234 Main St"
              defaultValue={dataForm?.data?.res?.data?.Avatar_index}
            />
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setForm(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

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
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
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
                      <CTableDataCell>
                        <svg
                          onClick={() => handleDetele()}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          height={30}
                          width={30}
                        >
                          <path d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                        </svg>
                        <svg
                          onClick={() => handleEdit(item.uID)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          height={28}
                          width={28}
                        >
                          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
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
                      </CTableDataCell>
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
