import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import './style.css'

const token = localStorage.getItem('token_key')

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `http://192.168.0.197/api/admin/sys`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result
  } catch (err) {
    console.log(err)
  }
}

const Tables = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      console.log(data)
      setData(data.data.res.data)
    }
    ss()
  }, [])

  console.log('data system ne', data)

  const [title, setTitle] = useState('')
  const [version, setVersion] = useState('')
  const [maintainContent, setMaintainContent] = useState('')
  const [msg, setMsg] = useState('')

  

  return (
    <CForm className="form_system">
      <CCol sm={12} className="d-flex align-items-center">
        <CFormInput
          label="Tiêu đề"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput
          label="Phiên bản"
          type="text"
          name="version"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
          required
        />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput
          label="Hình ảnh"
          type="file"
          name="maintain_content"
          value={maintainContent}
          onChange={(e) => setMaintainContent(e.target.value)}
        />
      </CCol>

      <CButton className="mt-5 btn_update" type='submit'>Cập nhật</CButton>

      <div className="message">{msg ? <p>{msg}</p> : null}</div>
    </CForm>
  )
}

export default Tables
