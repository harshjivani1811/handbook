// @ts-nocheck
import React, { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { createUser } from '../../API/user.api'

function Register () {
  const [data, setData] = useState({
    isOwner: false,
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    phoneNumber: ''
  })
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const { firstName, lastName, gender, phoneNumber, email, password } = data
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    phoneNumber: ''
  })

  const handleChange = name => e => {
    // console.log(" test ", e.target.value);
    Validate(name, e.target.value)
    setData({
      ...data,
      [name]: e.target.value
    })

    if (name === 'phoneNumber') {
      const value = e.target.value.replace(/\D/g, '')
      setData({ ...data, phoneNumber: value })
    }
  }

  const Validate = (name, value) => {
    if (value.length === 0) {
      setError({ ...error, [name]: `${name} should not be empty **` })
    } else {
      setError({ ...error, [name]: '' })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    // setLoading(true)
    if (
      !firstName ||
      !lastName ||
      // !gender ||
      !email ||
      !password ||
      !phoneNumber
    ) {
      if (!firstName) {
        setError({ firstName: 'Please Enter First Name **' })
      } else if (!lastName) {
        setError({ lastName: 'Please Enter Last Name **' })
      }
      // else if (!gender) {
      //   setError({ gender: 'Please Select Your Gender' })
      // }
      else if (!email) {
        setError({ email: 'Please Enter Email' })
      } else if (!password) {
        setError({ password: 'Please Enter Password' })
      } else if (!phoneNumber) {
        setError({ phoneNumber: 'Please Enter Phone Number' })
      }
    } else {
      setError({})
      axios({
        url: createUser,
        method: 'POST',
        data: {
          isOwner: false,
          firstName,
          lastName,
          gender,
          email,
          password,
          phoneNumber
        }
      })
        .then(res => {
          setLoading(false)
          setRedirect(true)
        })
        .catch(() => {
          setLoading(false)
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
        <div className='login-container' style={{ paddingTop: '5rem' }}>
          <div style={{ width: '650px' }} className='login-div-content'>
            <h1 className='login-h1'>Register</h1>

            <form onSubmit={handleSubmit}>
              {/* First Name input */}
              <div className='login-input-div'>
                <label htmlFor='firstname'>First name</label>
                <input
                  type='text'
                  id='firstname'
                  value={firstName}
                  onChange={handleChange('firstName')}
                  placeholder='Enter Name'
                />
                {error.firstName ? (
                  <small className='text-danger fw-bold'>
                    {error.firstName}
                  </small>
                ) : (
                  ''
                )}
              </div>
              {/* Last Name input */}
              <div className='login-input-div'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  type='text'
                  id='lastname'
                  value={lastName}
                  onChange={handleChange('lastName')}
                  placeholder='Enter Last Name'
                />
                {error.lastName ? (
                  <small className='text-danger fw-bold'>
                    {error.lastName}
                  </small>
                ) : (
                  ''
                )}
              </div>
              {/* Gender Dropdown */}
              {/* <div className='login-input-div'>
                <label htmlFor='gender'>Gender</label>
                <select
                  htmlFor='genderDropdown'
                  className='form-control'
                  value={gender}
                  onChange={handleChange('gender')}
                >
                  <option value='' disabled>
                    Select Gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='LGBTQ'>LGBTQ</option>
                  <option value='other'>Other</option>
                  <option value='undisclosed'>Undisclosed</option>
                </select>
                {error.gender ? (
                  <small className='text-danger fw-bold'>{error.gender}</small>
                ) : (
                  ''
                )}
              </div> */}
              {/* Email input */}
              <div className='login-input-div form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  type='email'
                  id='email'
                  className='form-control'
                  value={email}
                  onChange={handleChange('email')}
                  onBlur={e => {
                    const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                    const email = e.target.value
                    if (!email.match(mailFormat)) {
                      setError({ email: 'Please Enter valid Email' })
                    }
                  }}
                  placeholder='Enter Email'
                />
                {error.email ? (
                  <small className='text-danger fw-bold'>{error.email}</small>
                ) : (
                  ''
                )}
              </div>

              {/* Password input */}
              <div className='login-input-div'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  value={password}
                  onChange={handleChange('password')}
                  placeholder='Enter Password'
                />
                {error.password ? (
                  <small className='text-danger fw-bold'>
                    {error.password}
                  </small>
                ) : (
                  ''
                )}
              </div>
              {/* Phone number input */}
              <div>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                  type='text'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  placeholder='Enter Phone Number'
                  maxLength='10'
                />
                {error.phoneNumber ? (
                  <small className='text-danger fw-bold'>
                    {error.phoneNumber}
                  </small>
                ) : (
                  ''
                )}
              </div>

              <div className='login-btn-div'>
                <input
                  type='submit'
                  value='Register'
                  className='btn login-btn'
                />
                <p style={{ marginTop: '5px' }}>
                  Already have an account?{' '}
                  <Link to='/login'>
                    <span style={{ color: 'blue' }}>Login</span>
                  </Link>
                </p>
              </div>
            </form>
            {redirect ? <Redirect to='/login' /> : ''}
          </div>
        </div>
      )}
    </>
  )
}

export default Register
