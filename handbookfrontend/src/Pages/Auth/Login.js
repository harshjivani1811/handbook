import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { signIn } from '../../API/auth.api'

function Login () {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const [error, setError] = useState({
    email: '',
    password: '',
    mainError: ''
  })

  const { email, password } = data

  const handleChange = name => e => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setLoading(true)

    if (!email || !password) {
      if (!email) {
        setError({ email: 'Please Enter Email **' })
      } else if (!password) {
        setError({ password: 'Please Enter Password **' })
      }
    } else {
      axios({
        // url: `${process.env.REACT_APP_API_URL}/api/auth/signin`,
        url: signIn,
        method: 'POST',
        data: {
          email: email,
          password: password
        }
      })
        .then(res => {
          localStorage.setItem('handbook', JSON.stringify(res.data))
          setLoading(false)
          setRedirect(true)
        })
        .catch(err => {
          setLoading(false)
          setError({ mainError: 'Authentication Failed' })
        })
    }
  }

  return (
    /* eslint multiline-ternary: ["error", "never"] */
    <>
      {loading ? (
        <div
          style={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loader
            type='Puff'
            color='#282c34'
            height={100}
            width={100}
            timeout={70000} // 3 secs
          />
        </div>
      ) : (
        <div className='login-container'>
          <div style={{ width: '500px' }} className='login-div-content'>
            <h1 className='login-h1'>Login</h1>
            {error.mainError ? (
              <h4 className='text-danger text-center fw-bold my-2'>
                {error.mainError}
              </h4>
            ) : (
              ''
            )}
            <hr />
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className='login-input-div'>
                <label htmlFor='email'>Email address :</label>
                <input
                  className='form-control'
                  type='email'
                  id='email'
                  value={email}
                  onChange={handleChange('email')}
                  placeholder='Enter a valid email address'
                />
                {error.email ? (
                  <small className='text-danger fw-bold'>{error.email}</small>
                ) : (
                  ''
                )}
              </div>

              {/* Password input */}
              <div>
                <label htmlFor='password'>Password :</label>
                <input
                  className='form-control'
                  type='password'
                  id='password'
                  value={password}
                  onChange={handleChange('password')}
                  placeholder='Enter password'
                />
                {error.password ? (
                  <small className='text-danger fw-bold'>
                    {error.password}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div style={{ paddingTop: '5px', textAlign: 'center' }}>
                <a href='#!'>Forgot password?</a>
              </div>

              <div className='login-btn-div'>
                <input type='submit' value='Login' className='btn login-btn' />
                <p style={{ marginTop: '5px' }}>
                  Don't have an account?{' '}
                  <Link to='/register'>
                    <span style={{ color: 'blue' }}>Register</span>
                  </Link>
                </p>
              </div>
            </form>
            {redirect ? <Redirect to='/info' /> : ''}
          </div>
        </div>
      )}
    </>
  )
}

export default Login
