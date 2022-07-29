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
const token = localStorage.getItem('token_key')
const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `http://192.168.0.197/api/history/transactions`,
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
  console.log('data ne', data)
  return (
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
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data?.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item.status}</CTableHeaderCell>
                    <CTableDataCell colSpan="row">{item.type}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
