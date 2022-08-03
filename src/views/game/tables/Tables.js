import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'
import {
  CModalFooter,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CFormInput,
  CFormSelect,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
} from '@coreui/react'
import ReactPaginate from 'react-paginate'

const token = localStorage.getItem('token_key')

const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/game/config`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result
  } catch (err) {
    console.log('err')
  }
}
const getSignature1 = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/game-list`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result
  } catch (err) {
    console.log('err')
  }
}
const editData = new FormData()
const Tables = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [page, setPage] = useState(0)
  const [detail, setDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([])
  const [playTime, setPlayTime] = useState('')
  const [coolTime, setCoolTime] = useState('')
  const [numberPickScore, setNumberPickScore] = useState('')
  const [numberBingoScore, setNumberBingoScore] = useState('')
  const [numberComboScore, setNumberComboScore] = useState('')
  const [leagueJoinPrice, setLeagueJoinPrice] = useState('')
  const [leaguePlayPrice, setLeaguePlayPrice] = useState('')
  const [leagueRewardFee, setLeagueRewardFee] = useState('')

  // handle detail
  const handleDetail = (data) => {
    setDataDetail(data)
    setDetail(!detail)
  }
  async function getPage() {
    const data = await getSignature()
    setData(data)
    setPlayTime(data?.data?.res?.data[0].playTime)
    setCoolTime(data?.data?.res?.data[0].coolTime)
    setNumberPickScore(data?.data?.res?.data[0].number_pick_score)
    setNumberBingoScore(data?.data?.res?.data[0].number_bingo_score)
    setNumberComboScore(data?.data?.res?.data[0].number_combo_score)
    setLeagueJoinPrice(data?.data?.res?.data[0].league_join_price)
    setLeaguePlayPrice(data?.data?.res?.data[0].league_play_price)
    setLeagueRewardFee(data?.data?.res?.data[0].league_reward_fee)
  }
  async function getPage1() {
    const data = await getSignature1()
    console.log('Duy nè', data?.data?.res?.data)
    setData1(data)
  }
  useEffect(() => {
    getPage()
    getPage1()
  }, [])

  const onChange = (e, name) => {
    console.log(e.target.value)
    switch (name) {
      case 'play_time':
        setPlayTime(e.target.value)
        break
      case 'cool_time':
        setCoolTime(e.target.value)
        break
      case 'pick_score':
        setNumberPickScore(e.target.value)
        break
      case 'bingo_score':
        setNumberBingoScore(e.target.value)
        break
      case 'over_score':
        setNumberComboScore(e.target.value)
        break
      case 'league_fee':
        setLeagueRewardFee(e.target.value)
        break
      case 'league_play_price':
        setLeaguePlayPrice(e.target.value)
        break
      case 'league_join_price':
        setLeagueJoinPrice(e.target.value)
        break
      default:
    }
  }
  const handleSubmit = async () => {
    editData.append('play_time', playTime)
    editData.append('cool_time  ', coolTime)
    editData.append('pick_score', numberPickScore)
    editData.append('bingo_score', numberBingoScore)
    editData.append('over_score', numberComboScore)
    editData.append('league_fee', leagueRewardFee)
    editData.append('league_play_price', leaguePlayPrice)
    editData.append('league_join_price', leagueJoinPrice)
    await axios({
      method: 'Post',
      url: `${process.env.REACT_APP_URL_API}/api/game/config/update`,
      data: editData,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        console.log(response.data.errors)
        //getPage()
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Game config</strong>
            </CCardHeader>
            <CCardBody className="d-flex w-100">
              <CForm className="w-50 me-3">
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="Play Time"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].playTime}
                  onChange={(e) => {
                    onChange(e, 'play_time')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="Cool Time"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].coolTime}
                  onChange={(e) => {
                    onChange(e, 'cool_time')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="Number pick score"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].number_pick_score}
                  onChange={(e) => {
                    onChange(e, 'pick_score')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="Number bingo score"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].number_bingo_score}
                  onChange={(e) => {
                    onChange(e, 'bingo_score')
                  }}
                />
              </CForm>
              <CForm className="w-50 ms-3">
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="Number combo score"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].number_combo_score}
                  onChange={(e) => {
                    onChange(e, 'play_time')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="League join price"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].league_join_price}
                  onChange={(e) => {
                    onChange(e, 'over_score')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="League play price"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].league_play_price}
                  onChange={(e) => {
                    onChange(e, 'league_play_price')
                  }}
                />
                <CFormInput
                  type="number"
                  id="exampleFormControlInput1"
                  label="League reward fee"
                  placeholder="Nhập dữ liệu... "
                  className="w-100 mb-2"
                  defaultValue={data?.data?.res?.data[0].league_reward_fee}
                  onChange={(e) => {
                    onChange(e, 'league_join_price')
                  }}
                />
              </CForm>
            </CCardBody>

            <div className="d-flex justify-content-center">
              <CButton
                className="w-25 btn btn-primary"
                color="primary"
                onClick={() => handleSubmit()}
              >
                Submit
              </CButton>
            </div>
          </CCard>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Head to head </strong>
                </CCardHeader>
                <CCardBody>
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">game_name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">playCoin</CTableHeaderCell>
                        <CTableHeaderCell scope="col">reward_fee</CTableHeaderCell>
                        <CTableHeaderCell scope="col">is_usable</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data1?.data?.res?.data.map((item, index) => (
                        <CTableRow key={item.gID}>
                          <CTableDataCell scope="row">{index}</CTableDataCell>
                          <CTableDataCell scope="row">{item.game_name}</CTableDataCell>
                          <CTableDataCell colSpan="row">{item.playCoin}</CTableDataCell>
                          <CTableDataCell>{item.reward_fee}</CTableDataCell>
                          <CTableDataCell>{item.is_usable}</CTableDataCell>
                          <CTableDataCell>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              height={30}
                              width={30}
                              style={{ cursor: 'pointer' }}
                            >
                              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 mx-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              height={28}
                              width={28}
                              style={{ cursor: 'pointer' }}
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
                              style={{ cursor: 'pointer' }}
                            >
                              <path d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
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
        </CCol>
      </CRow>
    </div>
  )
}
export default Tables
