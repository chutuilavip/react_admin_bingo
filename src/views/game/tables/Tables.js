import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
// import DatePicker from 'react-datepicker'
// import ReactDatePicker from 'react-datepicker'

import DateTimePicker from 'react-date-picker'
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
const getSignature2 = async (id) => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/game-list/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return result
  } catch (err) {
    console.log('err')
  }
}
const getSignature3 = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/game/league`,
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
  const [data2, setData2] = useState([])
  const [headToHeadDetail, setHeadToHeadDetail] = useState({})
  const [idHeadToHeadDetail, setidHeadToHeadDetail] = useState('')

  const [page, setPage] = useState(0)
  const [detail, setDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([])
  const [editModal, setEditMoldal] = useState(false)
  //------------------------------------------- game config ----------------------------------------------------------
  const [playTime, setPlayTime] = useState('')
  const [coolTime, setCoolTime] = useState('')
  const [numberPickScore, setNumberPickScore] = useState('')
  const [numberBingoScore, setNumberBingoScore] = useState('')
  const [numberComboScore, setNumberComboScore] = useState('')
  const [leagueJoinPrice, setLeagueJoinPrice] = useState('')
  const [leaguePlayPrice, setLeaguePlayPrice] = useState('')
  const [leagueRewardFee, setLeagueRewardFee] = useState('')
  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------- head to head ----------------------------------------------------------

  const [headToHead, setHeadToHead] = useState({
    game_name: '',
    play_coin: '',
    reward_fee: '',
    is_usable: '',
  })
  //------------------------------------------------------------------------------------------------------------------
  //------------------------------------------- league ----------------------------------------------------------

  const [league, setLeague] = useState({
    eventName: '',
    reqStart: '',
    reqEnd: '',
    startDate: '',
    endDate: '',
    isStatus: '',
    isView: '',
    reqCoin: '',
    playCoin: '',
    rewardCoin: '',
  })
  //------------------------------------------------------------------------------------------------------------------

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
    //console.log('Duy nè', data?.data?.res?.data)
    setData1(data)
  }
  async function getPage2() {
    const data = await getSignature3()
    console.log('Duy nè', data?.data?.res?.data[0])
    setData2(data)
    setLeague({
      ...league,
      eventName: data?.data?.res?.data[0].eventName,
      reqStart: data?.data?.res?.data[0].reqStart,
      reqEnd: data?.data?.res?.data[0].reqEnd,
      startDate: data?.data?.res?.data[0].startDate,
      endDate: data?.data?.res?.data[0].endDate,
      isStatus: data?.data?.res?.data[0].isStatus,
      isView: data?.data?.res?.data[0].isView,
      reqCoin: data?.data?.res?.data[0].reqCoin,
      playCoin: data?.data?.res?.data[0].playCoin,
      rewardCoin: data?.data?.res?.data[0].rewardCoin,
    })
  }

  async function getHeadToHeadDetail(id) {
    const data = await getSignature2(id)
    console.log('Duy nè', data?.data?.res?.data)
    //setHeadToHeadDetail(data)
    setHeadToHead({
      ...headToHead,
      game_name: data?.data?.res?.data?.game_name,
      play_coin: data?.data?.res?.data?.playCoin,
      reward_fee: data?.data?.res?.data?.reward_fee,
      is_usable: data?.data?.res?.data?.is_usable,
    })
  }
  useEffect(() => {
    getPage()
    getPage1()
    getPage2()
  }, [])
  const onChange = (e, name) => {
    console.log(e.target.value)
    switch (name) {
      //------------------------------------------- game config ----------------------------------------------------------
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
      //------------------------------------------------------------------------------------------------------------------
      //------------------------------------------- head to head ----------------------------------------------------------
      case 'game_name':
        setHeadToHead({ ...headToHead, game_name: e.target.value })
        break
      case 'playCoin':
        setHeadToHead({ ...headToHead, play_coin: e.target.value })
        break
      case 'reward_fee':
        setHeadToHead({ ...headToHead, reward_fee: e.target.value })
        break
      case 'is_usable':
        setHeadToHead({ ...headToHead, is_usable: e.target.value })
        break
      //------------------------------------------------------------------------------------------------------------------
      //------------------------------------------- league ---------------------------------------------------------------
      case 'eventName':
        setLeague({ ...league, eventName: e.target.value })
        break
      case 'reqStart':
        setLeague({ ...league, reqStart: e.target.value })
        break
      case 'reqEnd':
        setLeague({ ...league, reqEnd: e.target.value })
        break
      case 'startDate':
        setLeague({ ...league, startDate: e.target.value })
        break

      case 'endDate':
        setLeague({ ...league, endDate: e.target.value })
        break
      case 'isStatus':
        setLeague({ ...league, isStatus: e.target.value })
        break
      case 'isView':
        setLeague({ ...league, isView: e.target.value })
        break
      case 'reqCoin':
        setLeague({ ...league, reqCoin: e.target.value })
        break
      case 'play_Coin':
        setLeague({ ...league, playCoin: e.target.value })
        break
      case 'rewardCoin':
        setLeague({ ...league, rewardCoin: e.target.value })
        break

      //------------------------------------------------------------------------------------------------------------------

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
  const handleSubmitHeadToHead = async (id) => {
    await axios({
      method: 'Post',
      url: `${process.env.REACT_APP_URL_API}/api/game-list/update/${id}`,
      data: headToHead,
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        console.log(response.data.errors)
        getPage1()
      })
      .catch(function (err) {
        console.log(err)
      })

    setEditMoldal(!editModal)
  }

  const handleEdit = async (id) => {
    await getHeadToHeadDetail(id)
    setEditMoldal(!editModal)
    setidHeadToHeadDetail(id)
  }

  var optionHour = []
  for (var i = 0; i < 24; i++) {
    optionHour.push(<option value={i}> {i} </option>)
  }
  var optionMinute = []
  for (var j = 0; j < 60; j++) {
    optionMinute.push(<option value={j}> {j} </option>)
  }
  const [value, onChanged] = useState(new Date())

  return (
    <div>
      <CModal className="modal_edit" visible={editModal} onClose={() => setEditMoldal(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCol xs={12}>
            <CFormInput
              label="game_name"
              placeholder=""
              onChange={(e) => onChange(e, 'game_name')}
              defaultValue={headToHead.game_name}
              //defaultValue={dataForm?.data?.res?.data?.NickName}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="playCoin"
              placeholder=""
              onChange={(e) => onChange(e, 'playCoin')}
              defaultValue={headToHead.play_coin}
              //defaultValue={dataForm?.data?.res?.data?.NickName}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="is_usable"
              placeholder=""
              onChange={(e) => onChange(e, 'is_usable')}
              defaultValue={headToHead.is_usable}
              //defaultValue={dataForm?.data?.res?.data?.NickName}
            />
          </CCol>
          <CCol xs={12}>
            <CFormInput
              label="reward_fee"
              placeholder=""
              onChange={(e) => onChange(e, 'reward_fee')}
              defaultValue={headToHead.reward_fee}
              //defaultValue={dataForm?.data?.res?.data?.NickName}
            />
          </CCol>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setEditMoldal(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={() => handleSubmitHeadToHead(idHeadToHeadDetail)}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
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
                              onClick={() => handleEdit(item.gID)}
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
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardHeader>
                  <strong>Head to head </strong>
                </CCardHeader>
                <CCardBody>
                  <CTable>
                    <CTableHead>
                      <CTableRow>
                        <CTableHeaderCell scope="col">eventID</CTableHeaderCell>
                        <CTableHeaderCell scope="col">event_name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">req_start_date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">league_start_date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">league_end_date</CTableHeaderCell>
                        <CTableHeaderCell scope="col">req_gold</CTableHeaderCell>
                        <CTableHeaderCell scope="col">req_play_coin</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>

                    <CTableBody>
                      <CTableRow>
                        <CTableDataCell scope="row" className="">
                          <CFormInput
                            placeholder=""
                            defaultValue={data2?.data?.res?.data[0].eventID}
                          />
                        </CTableDataCell>
                        <CTableDataCell scope="row">
                          <CFormInput
                            placeholder=""
                            defaultValue={league.eventName}
                            onChange={(e) => {
                              onChange(e, 'eventName')
                            }}

                            //onChange={(e) => onChange(e, 'eventName')}
                          />
                        </CTableDataCell>
                        <CTableDataCell colSpan="row">
                          <div className="d-flex">
                            <DateTimePicker
                              onChange={onChanged}
                              defaultValue={league.reqStart.slice(0, 10)}
                              format="yyyy-MM-dd"
                            />
                            <CFormSelect
                              aria-label="Default select example "
                              className="w-25"
                              defaultValue={league.reqStart.slice(10, 12)}
                            >
                              {optionHour}
                            </CFormSelect>
                            <CFormSelect aria-label="Default select example " className="w-25">
                              {optionMinute}
                            </CFormSelect>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell colSpan="row">
                          <div className="d-flex">
                            <DateTimePicker
                              onChange={onChanged}
                              value={value}
                              format="yyyy-MM-dd"
                            />
                            <CFormSelect aria-label="Default select example " className="w-25">
                              {optionHour}
                            </CFormSelect>
                            <CFormSelect aria-label="Default select example " className="w-25">
                              {optionMinute}
                            </CFormSelect>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell colSpan="row">
                          <div className="d-flex">
                            <DateTimePicker
                              onChange={onChanged}
                              value={value}
                              format="yyyy-MM-dd"
                            />
                            <CFormSelect aria-label="Default select example " className="w-25">
                              {optionHour}
                            </CFormSelect>

                            <CFormSelect aria-label="Default select example " className="w-25">
                              {optionMinute}
                            </CFormSelect>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell scope="row">
                          <CCol xs={12}>
                            <CFormInput
                              placeholder=""
                              onChange={(e) => onChange(e, 'play_Coin')}
                              defaultValue={league.playCoin}
                            />
                          </CCol>
                        </CTableDataCell>
                        <CTableDataCell scope="row">
                          <CCol xs={12}>
                            <CFormInput
                              placeholder=""
                              onChange={(e) => onChange(e, 'rewardCoin')}
                              defaultValue={league.rewardCoin}
                            />
                          </CCol>
                        </CTableDataCell>
                      </CTableRow>
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
