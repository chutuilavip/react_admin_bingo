import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const checkTokenUser = async () => {
  // const token_user = localStorage.getItem('token_key')
  const token_user = sessionStorage.getItem('token_user')
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
    console.log('err')
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

  if (dataUser !== null && dataUser !== undefined) {
    return <Outlet />
  } else return <Navigate to="/login" />
}
