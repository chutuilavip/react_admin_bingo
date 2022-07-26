import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import DefaultLayout from './layout/DefaultLayout'

const checkTokenUser = async () => {
  const token_user = localStorage.getItem('token_key')
  try {
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/auth/user-profile`,
      headers: {
        Authorization: `Bearer ${token_user}`,
      },
    })
    return result
  } catch (err) {
    console.log('err get')
  }
}

export default function ProviderRoute() {
  const [dataUser, setDataUser] = useState({})
  useEffect(() => {
    async function checkData() {
      const tokenUser = await checkTokenUser()

      setDataUser(tokenUser)
    }
    checkData()
  }, [])

  // if (1 === 1) {
  if (dataUser !== null && dataUser !== undefined) {
    return <DefaultLayout />
  } else return <Navigate to="/login" />
}
