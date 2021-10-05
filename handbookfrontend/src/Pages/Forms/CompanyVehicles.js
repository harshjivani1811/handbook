// @ts-nocheck
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import Loader from 'react-loader-spinner'
import { createcompanyvehicles } from '../../API/Form/companyvehicle.api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const CompanyVehicles = props => {
  // const [formFlag, setformFlag] = useState(false)
  const [loginData, setLoginData] = useState()
  const [data, setData] = useState({
    isCompanyVehicle: '',
    isGpsSystem: 'no',
    error: false,
    errormessage: '',
    Redirect: false,
    loading: false
  })

  const [formErrors, setFormErrors] = useState({
    formError: ''
  })

  const { isCompanyVehicle, isGpsSystem, error, errormessage } = data

  const handleChange = name => e => {
    handleValidation(name, e.target.value)
    setData({
      ...data,
      [name]: e.target.value
    })
  }

  const handleValidation = (name, value) => {
    if (value.length === 0) {
      setFormErrors({ ...formErrors, [name]: `${name} should not be empty!` })
    } else {
      setFormErrors({ ...formErrors, [name]: '' })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!isCompanyVehicle) {
      setData({ ...data, error: true, errormessage: 'Please select any one' })
    } else {
      setData({ ...data, error: false, errormessage: '' })
      axios({
        url: createcompanyvehicles,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          isCompanyVehicle: isCompanyVehicle,
          isGpsSystem: isGpsSystem
        }
      })
        .then(res => {
          // console.log("Result :", res)
          sendToProgressBar()
        })
        .catch(err => console.log('Error :', err))
    }
  }

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))
    setLoginData(loginToken)
  }, [])

  const sendToProgressBar = () => {
    props.flag('Done')
    props.barValue(15)
  }

  return (
    <div>
      {/* {loading ? (
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
            timeout={70000} //3 secs
          />
        </div>
      ) : (
        ''
      )} */}
      <>
        {/* eslint multiline-ternary: ["error", "never"] */}

        <form
          onSubmit={handleSubmit}
          className='form-common payroll common-radio-sec'
        >
          <div className='back-btn'>
            <strong
              className='btn-light'
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-CompanyVehicles')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>Do you have company vehicles?</h1>
          {error ? (
            <span className='alert alert-danger' role='alert'>
              {errormessage}
            </span>
          ) : (
            ''
          )}

          <div className='formgroup'>
            <input
              type='radio'
              name='isCompanyVehicle'
              className='form-input-check'
              value='yes'
              onClick={handleChange('isCompanyVehicle')}
            />
            <label>Yes</label>
            <input
              type='radio'
              name='isCompanyVehicle'
              className='form-input-check'
              value='no'
              onChange={handleChange('isCompanyVehicle')}
            />
            <label>No</label>
          </div>

          {data.isCompanyVehicle === 'yes' ? (
            <>
              <div className='formgroup'>
                <h3> Do these vehicles have a GPS System?</h3>
                <input
                  type='radio'
                  name='isGpsSystem'
                  className='form-input-check'
                  onChange={handleChange('isGpsSystem')}
                />
                <label>Yes</label>
                <input
                  type='radio'
                  name='isGpsSystem'
                  className='form-input-check'
                  onChange={handleChange('isGpsSystem')}
                />
                <label>No</label>
              </div>
            </>
          ) : (
            ''
          )}

          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      </>
    </div>
  )
}

export default CompanyVehicles
