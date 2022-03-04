import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import Loader from 'react-loader-spinner'
import { createstructure } from '../../API/Form/companystructure.api'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const CompanyStruture = props => {
  const [loginData, setLoginData] = useState()
  const [radioData, setradioData] = useState({
    R1: '',
    R2: '',
    R3: '',
    error: false,
    errormessage: '',
    loading: false
  })

  const { R1, R2, R3, error, errormessage } = radioData

  const handleChange = name => e => {
    // console.log(e.target.value);
    setradioData({
      ...radioData,
      [name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    if (!R1 || !R2 || !R3) {
      setradioData({
        ...radioData,
        error: true,
        errormessage: 'Please select any one option from each'
      })
    } else {
      setradioData({
        ...radioData,
        error: false,
        errormessage: ''
      })
      axios({
        url: createstructure,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          R1: R1,
          R2: R2,
          R3: R3
        }
      })
        .then(res => {
          // console.log("Result :", res)
          sendToMain()
        })
        .catch(err => console.log('Error :', err))
    }
  }
  const sendToMain = () => {
    props.data('Done')
    props.barValue(14)
  }

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))
    setLoginData(loginToken)
  }, [])

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
        <form onSubmit={handleSubmit} className='form-common company-structure'>
          <div className='back-btn'>
            <strong
              className='btn-light'
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-CompanyStructure')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>What is your company structure?</h1>
          {error ? (
            <span className='alert alert-danger' role='alert'>
              {errormessage}
            </span>
          ) : (
            ''
          )}

          <p>Reporting Structure Level One:</p>
          <div className='company-structure-inner'>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='supervisor'
                name='R1'
                onChange={handleChange('R1')}
              />
              <label>Supervisor</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='manager'
                name='R1'
                onChange={handleChange('R1')}
              />
              <label>Manager</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='notApplicable'
                name='R1'
                onChange={handleChange('R1')}
              />
              <label>Not Applicable</label>
            </div>
          </div>

          <p>Reporting Structure Level Two:</p>
          <div className='company-structure-inner'>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='managers'
                name='R2'
                onChange={handleChange('R2')}
              />
              <label>Managers</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='hrpresentive'
                name='R2'
                onChange={handleChange('R2')}
              />
              <label>HR Presentative</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='officemanager'
                name='R2'
                onChange={handleChange('R2')}
              />
              <label>Office Manager</label>
            </div>
          </div>

          <p>Reporting Structure Level Three:</p>
          <div className='company-structure-inner'>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='owner'
                name='R3'
                onChange={handleChange('R3')}
              />
              <label>Owner</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='owner/s'
                name='R3'
                onChange={handleChange('R3')}
              />
              <label>Owner/s</label>
            </div>
            <div className='formgroup'>
              <input
                type='radio'
                className='form-check-input'
                value='president'
                name='R3'
                onChange={handleChange('R3')}
              />
              <label>President</label>
            </div>
          </div>

          <button type='submit' value='submit' className='btn'>
            Submit
          </button>
        </form>
      </>
    </div>
  )
}

export default CompanyStruture
