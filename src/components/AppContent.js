import React, { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import axios from 'axios'
// routes config
import routes from '../routes'

// const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjAuMTk3XC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjU4OTE1MzU1LCJleHAiOjE2NTg5MTg5NTUsIm5iZiI6MTY1ODkxNTM1NSwianRpIjoiTlAyaDBuS0JNa3UyZVZEZCIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.TkL_f9Qz94JVtlGxJJzPADjgPy7rskLgU_S4sSdcCGI`
// const getSignature = async () => {
//   try {
//     const result = await axios({
//       method: `Get`,
//       url: `http://192.168.0.197/api/auth/user-profile`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     return result
//   } catch (err) {
//     console.log(err)
//   }
// }

const AppContent = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   async function ss() {
  //     const data = await getSignature()
  //     console.log(data)
  //     setData(data.data)
  //   }
  //   ss()
  // }, [])
  // console.log('admin', data)

  // const accessToken = data.adminID === 'admin' ? true : false
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  // element={accessToken ? <route.element /> : <div>Duy</div>}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
