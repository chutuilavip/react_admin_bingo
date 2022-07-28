import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'

const auth = async () => {
  const token_user = localStorage.getItem('token')
  return token_user
}

export default function ProviderRoute() {
  const [checkUser, setCheck] = useState('')
  useEffect(() => {
    async function getToken() {
      const tokenUser = await auth()
      setCheck(tokenUser)
    }
    getToken()
  }, [])
  if (checkUser !== null && checkUser !== undefined) {
    console.log(checkUser)
    return <Outlet />
  } else return <Navigate to="/login" />
}
