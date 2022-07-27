<<<<<<< HEAD
import React from 'react'
import { useState, useEffect } from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 4086465f9047a5b54be50cb92632728dbf4c7c5e
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
<<<<<<< HEAD
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTk3XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU4OTA3NDk0LCJleHAiOjE2NTg5MTEwOTQsIm5iZiI6MTY1ODkwNzQ5NCwianRpIjoiZXBiSFhBOGptTVpuT0daWSIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.zf2gJGwH6VUUWz-BCcSI9uphy3o40PkPnbMyG5nRlEk`
const getSignature = async () => {
=======

const getPoint = async () => {
  const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTk3XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU4ODk0NTgyLCJleHAiOjE2NTg4OTgxODIsIm5iZiI6MTY1ODg5NDU4MiwianRpIjoiRm1GakFIS1dNbWNFWmthMyIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.WjdAJClvyMvd6Fyxbe6e9ksMPaSdlscbu9KeKWmNjNI`
>>>>>>> 4086465f9047a5b54be50cb92632728dbf4c7c5e
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
<<<<<<< HEAD
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
  console.log('data ne', data)
=======


const Tables = () => {
  const [dataU, setDataU] = useState({})
  useEffect(() => {
    async function callData() {
      let data = await getPoint()
      setDataU(data)
    }
    callData()
  }, [])
  // console.log(dataU)
>>>>>>> 4086465f9047a5b54be50cb92632728dbf4c7c5e
  return (
    // console.log(dataU)
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
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data?.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item.NickName}</CTableHeaderCell>
                    <CTableDataCell colSpan="row">{item.UserID}</CTableDataCell>
                    <CTableDataCell>{item.accountLevel}</CTableDataCell>
                  </CTableRow>
<<<<<<< HEAD
                ))}
              </CTableBody>
            </CTable>
=======
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
>>>>>>> 4086465f9047a5b54be50cb92632728dbf4c7c5e
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
