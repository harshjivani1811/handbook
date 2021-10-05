// @ts-nocheck
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Loader from 'react-loader-spinner'
import { createfireexit } from '../../API/Form/fireexit.api'
// import PayRoll from './PayRoll'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const FireExits = props => {
  const [loginData, setLoginData] = useState(false)
  const [data, setData] = useState({
    location: '',
    error: false,
    redirect: false,
    loading: false,
    Redirect: false
  })
  const handleChange = name => e => {
    setData({
      ...data,
      [name]: e.target.value
    })
  }

  const { location, error, errormessage } = data

  const handleSubmit = async e => {
    e.preventDefault()
    setData({ ...data, loading: true })
    if (!location) {
      setData({ error: true, errormessage: 'please enter location' })
    } else {
      axios({
        url: createfireexit,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          location: location
        }
      })
        .then(res => {
          sendToMain()
        })
        .catch(err => console.log('error:', err))
    }
  }

  const sendToMain = () => {
    props.data('done')
    props.barValue(14)
  }

  useEffect(() => {
    let loginToken = JSON.parse(localStorage.getItem('handbook'))
    setLoginData(loginToken)
  }, [])

  return (
    <div>
      {/* {loading ? (
                <div
                style={{
                  height: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Loader
                  type="Puff"
                  color="#282c34"
                  height={100}
                  width={100}
                  timeout={70000} //3 secs
                />
              </div>
            ) : (
                ""
            )} */}
      <>
        <form onSubmit={handleSubmit} className='form-common located'>
          <div className='back-btn'>
            <strong
              className='btn-light'
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-FireExit')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>Where are your fire exits located at?</h1>
          {error ? (
            <span className='alert alert-danger' role='alert'>
              {errormessage}
            </span>
          ) : (
            ''
          )}
          <div className='formgroup'>
            <label>Location:</label>
            <textarea
              className='form-control border border-dark'
              rows='3'
              id='inputlocation'
              placeholder=' Please enter location such as “North/East Entrance”'
              value={location}
              onChange={handleChange('location')}
            ></textarea>
          </div>
          <button type='submit' value='submit' className='btn'>
            Submit
          </button>
        </form>
      </>
    </div>
  )
}

export default FireExits
