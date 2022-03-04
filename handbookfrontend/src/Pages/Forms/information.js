// @ts-nocheck
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { createinformation } from '../../API/Form/information.api'
import { PopupWidget } from 'react-calendly'
import { connect } from 'react-redux'
import { getInformation } from './../../Redux/Action/action'

const Information = props => {
  /* eslint multiline-ternary: ["error", "never"] */
  const [loginData, setLoginData] = useState()

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    noOfEmployees: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    phonenumber: '',
    email: '',
    document: '',
    errormessage: '',
    error: false,
    redirect: false,
    loading: false,
    Redirect: false
  })

  const {
    firstName,
    lastName,
    companyName,
    streetAddress,
    city,
    email,
    zipcode,
    phonenumber,
    errormessage,
    document,
    noOfEmployees,
    error,
    loading,
    state
  } = data

  const handleChange = name => e => {
    handleValidation(name, e.target.value)
    setData({
      ...data,
      [name]: e.target.value
    })

    if (name === 'document') {
      if (e.target.files) {
        const imageData = e.target.files[0]
        setData({
          ...data,
          document: imageData
        })
      }
    }

    if (name === 'phonenumber') {
      const value = e.target.value.replace(/\D/g, '')
      setData({ ...data, phonenumber: value })
    }

    if (name === 'zipcode') {
      const value = e.target.value.replace(/\D/g, '')
      setData({ ...data, zipcode: value })
    }
  }

  const [dataError, setDataError] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    phonenumber: '',
    email: '',
    document: ''
  })

  const handleValidation = (name, value) => {
    if (value.length === 0) {
      setDataError({ ...dataError, [name]: `${name} should not be empty` })
    } else setDataError({ ...dataError, [name]: '' })
  }

  const [fileMsg, setFileMsg] = useState({
    uploaded: false,
    notUploaded: false,
    errTxt: '',
    progressBarValue: 14
  })

  const handleDocument = e => {
    e.preventDefault()
    if (document === '') {
      setFileMsg({ errTxt: 'File is not Selected' })
    } else {
      setData({ ...data, error: false, errormessage: '' })
      const formData = new FormData()
      formData.append('documents', document)
      axios
        .post('http://localhost:8000/api/documents/addData', formData)
        .then(res => {
          const docName = res.data.data.documents
          console.log('Status :', res.data)
          if (res.data.status !== true) {
            setFileMsg({ errTxt: 'file is uploading' })
          } else {
            setFileMsg({ ...fileMsg, uploaded: true, errTxt: '' })
            setData({
              ...data,
              document: docName,
              error: false,
              errormessage: ''
            })
          }
        })
        .catch(err => console.log('Error :', err))
    }

    setTimeout(() => {
      setFileMsg({ ...fileMsg, uploaded: false })
    }, 10000)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setData({ loading: true })
    if (
      !firstName ||
      !lastName ||
      !streetAddress ||
      !noOfEmployees ||
      !city ||
      !state ||
      !companyName ||
      !email ||
      !phonenumber ||
      !zipcode ||
      !document
    ) {
      setData({
        ...data,
        error: true,
        errormessage: 'please enter all details'
      })
    } else if (document.length === undefined) {
      setData({ ...data, loading: false })
      setFileMsg({ notUploaded: true, errTxt: '' })
      setTimeout(() => {
        setFileMsg({ notUploaded: false })
      }, 2000)
    } else {
      // setFileMsg({ ...fileMsg, notUploaded: false })
      setData({ ...data, error: false, errormessage: '' })
      axios({
        url: createinformation,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          firstName: firstName,
          lastName: lastName,
          companyName: companyName,
          noOfEmployees: noOfEmployees,
          streetAddress: streetAddress,
          city: city,
          state: state,
          zipcode: zipcode,
          phonenumber: phonenumber,
          email: email,
          document: document
        }
      })
        .then(res => {
          console.log('res.data.status :', res.status)
          if (res.status === 201) {
            sendToProgressBar()
            props.setInfoData(data)
            console.log('Axios Data :', res)
          } else {
            setData({ ...data, loading: true })
          }
        })
        .catch(err => console.log('Error :', err))
    }
  }

  const sendToProgressBar = () => {
    const progressBarNumber =
      fileMsg.progressBarValue === undefined ? 14 : fileMsg.progressBarValue
    props.barValue(progressBarNumber)
    props.flag('done')
  }

  const preFill = {
    name: 'Jon Snow',
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'test@test.com'
  }

  const pageSettings = {
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))
    setLoginData(loginToken)
  }, [])

  return (
    <div>
      {loading ? (
        <Loader
          type='Puff'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} // 3 secs
        />
      ) : (
        <>
          <form
            onSubmit={handleSubmit}
            className='form-common general-information'
          >
            <h1>General Information</h1>
            {error ? (
              <span className='alert alert-danger' role='alert'>
                {errormessage}
              </span>
            ) : (
              ''
            )}
            <div className='formgroup input-div'>
              <label>First Name:</label>
              <input
                type='text'
                className='form-control'
                id='inputfirstName'
                value={firstName}
                onChange={handleChange('firstName')}
              />
              <p className='error-msg'>{dataError.firstName}</p>
            </div>
            <div className='formgroup input-div'>
              <label>Last Name:</label>
              <input
                type='text'
                className='form-control'
                id='inputlastName'
                value={lastName}
                onChange={handleChange('lastName')}
              />
              <p className='error-msg'>{dataError.lastName}</p>
            </div>
            <div className='formgroup input-div'>
              <label> Company Name:</label>
              <input
                type='text'
                className='form-control'
                id='inputcompanyName'
                value={companyName}
                onChange={handleChange('companyName')}
              />
              <p className='error-msg'>{dataError.companyName}</p>
            </div>
            <div className='formgroup input-div'>
              <label> How many Employees do you have ?</label>
              <input
                type='number'
                className='form-control'
                id='inputNoOfEmployees'
                value={noOfEmployees}
                onChange={handleChange('noOfEmployees')}
              />
              <p className='error-msg'>{dataError.noOfEmployees}</p>
            </div>
            <div className='formgroup input-div'>
              <label>Street Address:</label>
              <textarea
                className='form-control'
                id='inputadress'
                value={streetAddress}
                onChange={handleChange('streetAddress')}
              />
              <p className='error-msg'>{dataError.streetAddress}</p>
            </div>
            <div className='formgroup input-div'>
              <label>city:</label>
              <input
                className='form-control'
                id='inputcity'
                value={city}
                onChange={handleChange('city')}
              />
              <p className='error-msg'>{dataError.city}</p>
            </div>
            <div className='formgroup input-div'>
              <label>State:</label>
              <input
                className='form-control'
                id='inputstate'
                value={state}
                onChange={handleChange('state')}
              />
              <p className='error-msg'>{dataError.state}</p>
            </div>
            <div className='formgroup input-div'>
              <label>Zipcode:</label>
              <input
                className='form-control'
                name='zipcode'
                maxLength={8}
                minLength={6}
                id='inputzipcode'
                value={zipcode}
                onChange={handleChange('zipcode')}
              />
              <p className='error-msg'>{dataError.zipcode}</p>
            </div>
            <div className='formgroup input-div'>
              <label>Phone No:</label>
              <input
                className='form-control'
                id='inputphonenumber'
                value={phonenumber}
                maxLength={10}
                minLength={8}

                onChange={handleChange('phonenumber')}
              />
              <p className='error-msg'>{dataError.phonenumber}</p>
            </div>
            <div className='formgroup input-div'>
              <label>Email:</label>
              <input
                className='form-control'
                id='email'
                value={email}
                onChange={handleChange('email')}
              />
              <p className='error-msg'>{dataError.email}</p>
            </div>
            <div className='formgroup cust-Upload-doc'>
              <label> Upload your current employee handbook:</label>
              <input
                className='form-control'
                name='document'
                type='file'
                accept='application/pdf, application/msword'
                id='inputDocument'
                onChange={handleChange('document')}
              />
              <button onClick={handleDocument} className='btn'>
                Upload
              </button>
              {fileMsg.errTxt ? (
                <span
                  style={{ marginLeft: '5px' }}
                  className='alert alert-warning'
                  role='alert'
                >
                  {fileMsg.errTxt}
                </span>
              ) : (
                ''
              )}

              {fileMsg.uploaded ? (
                <span
                  style={{ marginLeft: '5px' }}
                  className='alert alert-success'
                  role='alert'
                >
                  File Uploaded Successfully
                </span>
              ) : (
                ''
              )}
              {fileMsg.notUploaded ? (
                <span
                  style={{ marginLeft: '5px' }}
                  className='alert alert-warning'
                  role='alert'
                >
                  Please Upload your file
                </span>
              ) : (
                ''
              )}

              <p className='error-msg'>{dataError.document}</p>
            </div>

            <div className='formgroup input-div'>
              <PopupWidget
                className='bg-dark'
                text='Click Here to Schedule'
                url='https://calendly.com/acmesales'
                prefill={preFill}
                pageSettings={pageSettings}
              />
            </div>

            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  info: state.rootReducer
})

const mapDispatchToProps = dispatch => {
  return {
    setInfoData: data => dispatch(getInformation(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)
