// @ts-nocheck
import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import Loader from 'react-loader-spinner'
import { createpayroll } from '../../API/Form/payroll.api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// import CompanyVehicles from './CompanyVehicles'

const PayRoll = props => {
  // const [fileMsg, setFileMsg] = useState({
  //   uploaded: false,
  //   notUploaded: false,
  //   errTxt: '',
  //   flag: false
  // })

  const [loginData, setLoginData] = useState()
  const [data, setData] = useState({
    isPayRoll: '',
    isPayRollOps: {
      firsthalf: '',
      secondhalf: ''
    },
    error: false,
    errormessage: '',
    loading: false
  })

  const { isPayRoll, error, isPayRollOps, errormessage } = data

  const handleChange = name => e => {
    const tmp = {
      firsthalf: isPayRollOps.firsthalf,
      secondhalf: isPayRollOps.secondhalf
    }
    if (e.target.name === 'dropdown1' || e.target.name === 'dropdown6') {
      tmp.firsthalf = e.target.value
      tmp.secondhalf = ''
      setData({
        ...data,
        isPayRollOps: tmp
      })
    } else if (e.target.name === 'dropdown2' || e.target.name === 'dropdown4') {
      tmp.firsthalf = e.target.value
      setData({
        ...data,
        isPayRollOps: tmp
      })
    } else if (e.target.name === 'dropdown3' || e.target.name === 'dropdown5') {
      tmp.secondhalf = e.target.value
      setData({
        ...data,
        isPayRollOps: tmp
      })
    } else {
      setData({
        ...data,
        [name]: e.target.value
      })
    }
  }

  const handleSubmit = async e => {
    // console.log(e.target.value);
    e.preventDefault()

    if (!isPayRoll || !isPayRollOps) {
      setData({ ...data, error: true, errormessage: 'please select one' })
    } else {
      setData({ ...data, error: false, errormessage: '' })
      axios({
        url: createpayroll,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          isPayRoll: isPayRoll,
          isPayRollOps: isPayRollOps
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
    props.barValue(14)
  }

  return (
    /* eslint multiline-ternary: ["error", "never"] */
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
        <form
          onSubmit={handleSubmit}
          className='form-common payroll payroll-only'
        >
          <div className='back-btn'>
            <strong
              className='btn-light'
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-PayrollCycle')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>What is your payroll cycle?</h1>
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
              name='isPayRoll'
              className='form-input-check '
              value='monthly'
              onClick={handleChange('isPayRoll')}
            />
            <label> All personnel are paid monthly</label>
          </div>
          {/* {console.log(data)} */}
          <div className='formgroup'>
            {data.isPayRoll === 'monthly' ? (
              <>
                <label htmlFor='name' style={{ marginRight: '1rem' }}>
                  Select the Date
                </label>
                <select
                  className='form-control'
                  name='dropdown1'
                  id='date'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    1-31
                  </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                  <option value='31'>31</option>
                </select>
              </>
            ) : (
              ''
            )}
          </div>

          <div className='formgroup'>
            <input
              type='radio'
              name='isPayRoll'
              className='form-input-check'
              value='semiMonthly'
              onClick={handleChange('isPayRoll')}
            />
            <label> All personnel are paid semi-monthly</label>
          </div>

          <div className='formgroup'>
            {data.isPayRoll === 'semiMonthly' ? (
              <>
                <label htmlFor='name' style={{ marginRight: '1rem' }}>
                  Select the Date
                </label>
                <select
                  className='form-control'
                  name='dropdown2'
                  id='dateone'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    1-15
                  </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                </select>
                <select
                  className='form-control'
                  name='dropdown3'
                  id='dateone'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    16-31
                  </option>

                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                  <option value='31'>31</option>
                </select>
              </>
            ) : (
              ''
            )}
          </div>

          <div className='formgroup'>
            <input
              type='radio'
              name='isPayRoll'
              className='form-input-check'
              value='biweekly'
              onClick={handleChange('isPayRoll')}
            />
            <label> All personnel are paid bi-weekly</label>
          </div>

          <div className='formgroup'>
            {data.isPayRoll === 'biweekly' ? (
              <>
                <label htmlFor='name' style={{ marginRight: '1rem' }}>
                  Select the Date
                </label>
                <select
                  className='form-control'
                  name='dropdown4'
                  id='datetwo'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    1-15
                  </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                  <option value='11'>11</option>
                  <option value='12'>12</option>
                  <option value='13'>13</option>
                  <option value='14'>14</option>
                  <option value='15'>15</option>
                </select>

                <select
                  className='form-control'
                  name='dropdown5'
                  id='datetwo'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    16-31
                  </option>
                  <option value='16'>16</option>
                  <option value='17'>17</option>
                  <option value='18'>18</option>
                  <option value='19'>19</option>
                  <option value='20'>20</option>
                  <option value='21'>21</option>
                  <option value='22'>22</option>
                  <option value='23'>23</option>
                  <option value='24'>24</option>
                  <option value='25'>25</option>
                  <option value='26'>26</option>
                  <option value='27'>27</option>
                  <option value='28'>28</option>
                  <option value='29'>29</option>
                  <option value='30'>30</option>
                  <option value='31'>31</option>
                </select>
              </>
            ) : (
              ''
            )}
          </div>

          <div className='formgroup'>
            <input
              type='radio'
              name='isPayRoll'
              className='form-input-check'
              value='weekly'
              onClick={handleChange('isPayRoll')}
            />
            <label> All personnel are paid weekly</label>
          </div>

          <div className='formgroup'>
            {data.isPayRoll === 'weekly' ? (
              <>
                <label htmlFor='name' style={{ marginRight: '1rem' }}>
                  Select Day
                </label>
                <select
                  className='form-control'
                  name='dropdown6'
                  id='day'
                  onChange={handleChange('isPayRollOps')}
                >
                  <option value='' defaultValue>
                    Mon-Sun
                  </option>
                  <option value='Monday'>Monday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                  <option value='Friday'>Friday</option>
                  <option value='Saturday'>Saturday</option>
                  <option value='Sunday'>Sunday</option>
                </select>
              </>
            ) : (
              ''
            )}
          </div>

          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
        {/* {formPass ? (
                    <CompanyVehicles />
                ) : (
                    ""
                )} */}
      </>
    </div>
  )
}

export default PayRoll
