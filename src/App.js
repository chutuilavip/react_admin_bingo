import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
async function PrivateRoute() {
  if (
    !localStorage.getItem('token_key') &&
    window.location.href !== 'http://localhost:3000/#/login'
  ) {
    return (window.location.href = '/#/login')
  } else {
    const token = localStorage.getItem('token_key')
    const result = await axios({
      method: `Get`,
      url: `${process.env.REACT_APP_URL_API}/api/auth/check-auth`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!result.data.adminID) {
      return (window.location.href = '/#/login')
    }
  }
}
PrivateRoute()
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const token = localStorage.getItem('token_key')
const getSignature = async () => {
  try {
    const result = await axios({
      method: `Get`,
      url: `http://192.168.0.197/api/auth/user-profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    //console.log('data', result.data.res.data)
    return result
  } catch (err) {
    console.log(err)
  }
}

class App extends Component {
  render() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   async function ss() {
    //     const data = await getSignature()
    //     console.log(data)
    //     setData(data.data)
    //   }
    //   ss()
    //   // views / pages / login / Login
    // }, [])
    // console.log('admin', data)
    // const Login = React.lazy(() => import('../views/pages/login/Login'))
    // const accessToken = data.adminID === 'admin' ? true : false
    const accessToken = true
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />

            <Route path="*" name="Home" element={accessToken ? <DefaultLayout /> : <Login />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </HashRouter>
    )
  }
}

export default App
