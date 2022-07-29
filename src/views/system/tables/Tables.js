import React from 'react'
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
// import './style.css'
// import { toast } from 'react-toastify'
// import { Navigate } from 'react-router-dom'

const token = localStorage.getItem('token_key')

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}api/admin/sys`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return result
  } catch (err) {
    console.log(err)
  }
}

let dataSys = new FormData()

const Tables = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      console.log(data)
      setData(data)
    }
    ss()
  }, [])

  console.log('data system ne', data)

  const [title, setTitle] = useState('')
  const [version, setVersion] = useState('')
  const [maintainContent, setMaintainContent] = useState(null)
  const [loading, setLoading] = useState(false)

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeVersion = (e) => {
    setVersion(e.target.value)
  }

  const onChangemaintainContent = (e) => {
    setMaintainContent(e.target.files[0])
  }

  const handleSubmit = () => {
    setLoading(true)

    // dataSys.append('title', title)
    // dataSys.append('version', version)
    // dataSys.append('maintain_content', maintainContent)

    // axios({
    //   method: 'post',
    //   url: `${process.env.REACT_APP_URL_API}api/admin/sys/update`,
    //   data: dataSys,
    //   headers: { 'content-type': 'multipart/form-data' },
    // })
    //   .then(function (response) {
    //     setLoading(false)

    //     console.log(response)
    //   })
    //   .catch(function (err) {
    //     console.log(err)
    //   })
  }

  return (
    <CForm onSubmit={handleSubmit} className="form_system">
      <CCol sm={12} className="d-flex align-items-center">
        <CFormInput
          label="Tiêu đề"
          type="text"
          name="title"
          value={data?.data?.res?.data?.title}
          onChange={onChangeTitle}
        />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput label="Phiên bản" type="text" name="version" 
        value={data?.data?.res?.data?.version}
        onChange={onChangeVersion} />
      </CCol>

      <CCol sm={12} className="d-flex align-items-center mt-4">
        <CFormInput
          label="Hình ảnh"
          type="file"
          name="maintain_content"
          value={data?.data?.res?.data?.maintainContent}
          multiple
          onChange={onChangemaintainContent}
        />
      </CCol>

      <CCol sm={12} className='mt-4 system_img'>
        <CImage rounded src={data?.data?.res?.data?.maintain_content} alt="Image" width={200} height={200} />
      </CCol>

      <div className='d-flex justify-content-end mt-4'>
      <CButton className="btn_update" type="submit" disabled={loading}>
        Cập nhật
      </CButton>
      </div>
    </CForm>
  )
}

export default Tables
