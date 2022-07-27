import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
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

const getPoint = async () => {
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTk3XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU4ODk0NTgyLCJleHAiOjE2NTg4OTgxODIsIm5iZiI6MTY1ODg5NDU4MiwianRpIjoiRm1GakFIS1dNbWNFWmthMyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.WjdAJClvyMvd6Fyxbe6e9ksMPaSdlscbu9KeKWmNjNI`
  try {
    const result = await axios({
      method: `Get`,
      url: `http://192.168.0.197/api/user/gets`,
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
  const [dataU, setDataU] = useState({})
  useEffect(() => {
    async function callData() {
      let data = await getPoint()
      setDataU(data)
    }
    callData()
  }, [])
  console.log(dataU)
  return (
    // console.log(dataU)
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>
            <DocsExample href="components/table">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {dataU?.data?.res?.data?.map((item, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{item.UserID}</CTableHeaderCell>
                      <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                      <CTableDataCell>@twitter</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
