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
import { DocsExample } from 'src/components'
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTk3XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU4OTAyNDczLCJleHAiOjE2NTg5MDYwNzMsIm5iZiI6MTY1ODkwMjQ3MywianRpIjoibU40dTVjT0Z0cDZpdGVEUiIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Vf3ktITUKeM3q6TI7rrELQnryp-hT4gF7rkkL_F6OsQ`
const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `http://192.168.0.197/api/admin/sys`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    //console.log('data', result.data.res.data)
    return result
  } catch (err) {
    console.log(err)
  }
}

const Tables = () => {
  // const data = getSignature()
  const [data, setData] = useState([])
  useEffect(() => {
    async function ss() {
      const data = await getSignature()
      console.log(data)
      setData(data.data.res.data)
    }
    ss()
  }, [])
  // const data = getSignature().slice()
  // const [data, setData] = useState([])
  // setData(...getSignature())
  console.log('data system ne', data)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>System Table</strong>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Version</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {/* {data?.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{item.title}</CTableHeaderCell>
                      <CTableDataCell colSpan="2">{item.version}</CTableDataCell>
                      <CTableDataCell>{item.NickName}</CTableDataCell>
                    </CTableRow>
                  ))} */}
                <CTableRow>
                  <CTableHeaderCell scope="row">{data.title}</CTableHeaderCell>
                  <CTableDataCell colSpan="2">{data.version}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
