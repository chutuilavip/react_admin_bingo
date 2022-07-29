import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CButton,
  // CCard,
  // CCardBody,
  // CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CImage,
  // CRow,
  // CTable,
  // CTableBody,
  // CTableCaption,
  // CTableDataCell,
  // CTableHead,
  // CTableHeaderCell,
  // CTableRow,
} from '@coreui/react'
// import { DocsExample } from 'src/components'
import './style.css'
// import { Title } from 'chart.js'
// import { toast } from 'react-toastify'
// import { Navigate } from 'react-router-dom'

const token = localStorage.getItem('token_key')

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/admin/sys`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result.data.res.data
  } catch (err) {
    console.log(err)
  }
}

const formData = new FormData()

const Tables = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [version, setVersion] = useState('')
  const [maintainContent, setMaintainContent] = useState('')

  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      setData(data)
      setTitle(data.title)
      setVersion(data.version)
      setMaintainContent(data.maintainContent)
    }
    ss()
  }, [])

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeVersion = (e) => {
    setVersion(e.target.value)
  }

  const onChangemaintainContent = (e) => {
    setMaintainContent(e.target.files[0])
  }

  const handleSubmit = (e) => {
    formData.append('title', title)
    formData.append('version', version)
    formData.append('maintain_content', maintainContent)

    axios({
      method: 'Post',
      url: `${process.env.REACT_APP_URL_API}/api/admin/sys/update`,
      data: formData,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {})
      .catch(function (err) {
        console.log(err)
      })

    alert('Data has been saved!')
  }

  return (
    <CForm onSubmit={handleSubmit} className="form_system">
      <CCol sm={12} className="d-flex align-items-center">
        <CFormInput
          label="Tiêu đề"
          type="text"
          name="title"
          defaultValue={data.title}
          onChange={onChangeTitle}
        />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput
          label="Phiên bản"
          type="text"
          name="version"
          defaultValue={data.version}
          onChange={onChangeVersion}
        />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput
          label="Hình ảnh"
          type="file"
          name="maintain_content"
          defaultValue={data.maintainContent}
          onChange={onChangemaintainContent}
        />
      </CCol>

      {data.maintain_content === 'undefined' ? (
        <></>
      ) : (
        <>
          <CCol sm={12} className="mt-4 system_img">
            <CImage rounded src={data.maintain_content} alt="Image" width={200} height={200} />
          </CCol>
        </>
      )}

      <div className="d-flex justify-content-end mt-4">
        <CButton className="btn_update" type="submit">
          Cập nhật
        </CButton>
      </div>
    </CForm>
  )
}

export default Tables
