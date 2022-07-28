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
      url: `${process.env.REACT_APP_URL_API}/api/history/transactions`,
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
                  <CTableHeaderCell scope="col">Tài khoản</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Hình thức</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                  <CTableHeaderCell scope="col">From</CTableHeaderCell>
                  <CTableHeaderCell scope="col">To</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data?.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item.NickName}</CTableHeaderCell>
                    <CTableDataCell scope="row">
                      {(() => {
                        switch (item.type) {
                          case 'swap_to_point':
                            return 'Đổi token sang điểm';
                          case 'swap_to_token':
                            return 'Đổi điểm sang token';
                          default:
                            return '';
                        }
                      })()}
                    </CTableDataCell>
                    <CTableHeaderCell scope="row">
                      {(() => {
                        switch (item.type) {
                          case 'swap_to_point':
                            return `${item.tokenAmount} / ${item.pointAmount}`;
                          case 'swap_to_token':
                            return `${item.pointAmount} / ${item.tokenAmount}`;
                          default:
                            return '';
                        }
                      })()}
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item.from.slice(0, 7)}...{item.from.slice(-5)}</CTableHeaderCell>
                    <CTableHeaderCell scope="row">{item.to.slice(0, 7)}...{item.to.slice(-5)}</CTableHeaderCell>
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
