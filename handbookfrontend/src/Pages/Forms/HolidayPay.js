// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { createHolidayPay } from '../../API/Form/holidaypay.api'
import axios from 'axios'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useSelector } from 'react-redux'

const HolidayPay = props => {
  const AllStatePDFData = useSelector(
    state =>
      state.rootReducer.stateWithLeavesReducer.stateAndLeaves[3].singleState
  )

  const [formPass, setFormPass] = useState(false)
  const [loginData, setLoginData] = useState()

  const [data, setData] = useState({
    isHolidayPay: '',
    isPayHolidayPay: 'no',
    holiday: [],
    error: false,
    errormessage: '',
    successMsg: '',
    loading: false
  })

  const {
    isHolidayPay,

    isPayHolidayPay,
    holiday,
    error,
    errormessage,
    loading
  } = data

  const handleChange = name => e => {
    // PdfData()

    if (name === 'holiday') {
      if (e.target.checked === true) {
        let tmp = holiday
        tmp.push(e.target.value)
        setData({ ...data, holiday: tmp })
      } else if (e.target.checked === false) {
        let tmp = holiday
        tmp.indexOf(name)
        tmp.splice(tmp, 1)
      }
    } else {
      setData({
        ...data,
        [name]: e.target.value
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!isHolidayPay) {
      setData({ ...data, error: true, errormessage: 'Please Select One' })
    } else {
      setData({ ...data, error: false, errormessage: '' })
      axios({
        url: createHolidayPay,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          isHolidayPay: isHolidayPay,
          holiday: holiday,
          isPayHolidayPay: isPayHolidayPay
        }
      })
        .then(res => {
          setData({ loading: false, error: false })
          setFormPass(true)
          sendToProgressBar()
        })
        .catch(err => {
          console.log(err)
          console.log('formPass', formPass)
        })
    }
  }

  const sendToProgressBar = () => {
    document.getElementById('HolidayPay').style.display = 'none'
    props.barValue(15)
  }

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))
    setLoginData(loginToken)
  }, [])

  const Test = () => {
    return (
      <>
        <div className='my-5'>
          <h2>
            State Name :{' '}
            <span className='text-danger'>
              {AllStatePDFData[1].stateId.name}
            </span>
          </h2>
          {AllStatePDFData.map((item, i) => {
            return (
              <div key={i} className='my-3 border px-2'>
                <p>
                  Id : <span className='text-danger'>{item._id}</span>
                </p>
                <p>
                  Leave Title :{' '}
                  <span className='text-danger'>{item.title}</span>
                </p>
                <p>
                  Description :{' '}
                  <span className='text-danger'>{item.description}</span>
                </p>
              </div>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div>
      {/* eslint multiline-ternary: ["error", "never"] */}

      {loading ? (
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} // 3 secs
        />
      ) : (
        ''
      )}

      <>
        <form
          onSubmit={handleSubmit}
          className='form-common payroll common-radio-sec'
          id='HolidayPay'
        >
          <div className='back-btn'>
            <strong
              className='btn-light'
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-HolidayPay')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>Do You offer HolidayPay ?</h1>
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
              name='isHolidayPay'
              className='form-input-check'
              value='yes'
              onClick={handleChange('isHolidayPay')}
            />
            <label>Yes</label>
            <input
              type='radio'
              name='isHolidayPay'
              className='form-input-check'
              value='no'
              onChange={handleChange('isHolidayPay')}
            />
            <label>No</label>
          </div>
          {data.isHolidayPay === 'yes' ? (
            <>
              {/* Labor Day<br /> */}

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd1'
                  name='hd1'
                  value="newYear'sDay"
                  onChange={handleChange('holiday')}
                />
                <label>New Year's Day</label>
              </div>

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd2'
                  name='hd2'
                  value='memorialDay'
                  onChange={handleChange('holiday')}
                />
                <label> Memorial Day</label>
              </div>

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd3'
                  name='hd3'
                  value='july4'
                  onChange={handleChange('holiday')}
                />
                <label>
                  {' '}
                  July 4<sup>th</sup>
                </label>
              </div>

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd4'
                  name='hd4'
                  value='laborDay'
                  onChange={handleChange('holiday')}
                />
                <label>Labor Day</label>
              </div>

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd5'
                  name='hd5'
                  value='thanksgivingDay'
                  onChange={handleChange('holiday')}
                />
                <label>Thanksgiving Day</label>
              </div>

              <div className='formgroup'>
                <input
                  type='checkbox'
                  id='hd6'
                  name='hd6'
                  value='chrismasDay'
                  onChange={handleChange('holiday')}
                />
                <label>Christmas Day</label>
              </div>

              <div className='formgroup'>
                <h3>Do you pay part-time employees holiday pay?</h3>
                <input
                  type='radio'
                  name='isPayHolidayPay'
                  value='yes'
                  className='form-input-check'
                  onChange={handleChange('isPayHolidayPay')}
                />
                <label>Yes</label>
                <input
                  type='radio'
                  name='isPayHolidayPay'
                  value='no'
                  className='form-input-check'
                  onChange={handleChange('isPayHolidayPay')}
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
        {data.successMsg ? (
          <p
            className='alert alert-success'
            role='alert'
            style={{ marginTop: '2rem' }}
          >
            {data.successMsg}
          </p>
        ) : (
          ''
        )}
      </>
      <Test />
    </div>
  )
}

export default HolidayPay
