// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ClearIcon from '@material-ui/icons/Clear'
// import VisibilityIcon from '@material-ui/icons/Visibility'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import { createState } from '../../API/Form/states.api'
import axios from 'axios'
import { useSelector, connect } from 'react-redux'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { addAllStateAndLeaves } from './../../Redux/Action/action'
// import Loader from 'react-loader-spinner'
// import Button from '@material-ui/core/Button'

const style = {
  position: 'absolute',
  // top: '50%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const States = props => {

  const [loginData, setLoginData] = useState()
  const [data, setData] = useState({
    state: [],
    error: false,
    errormessage: '',
    loading: false,
    Redirect: false
  })
  const [policyToggle, setPolicyToggle] = useState({
    name: '',
    show: false
  })
  const [expanded, setExpanded] = useState('')

  const { state, error, errormessage } = data

  const [StateForLeaveSchema, setStateForLeaveSchema] = useState([])
  const [singleStatePDF, setSingleStatePDF] = useState([])
  const [allStateDataPDF, setAllStateDataPDF] = useState([])

  // Leave State Data
  const GetStateLeaveData = () => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/api/stateforleave/getall`,
      method: 'GET'
    })
      .then(res => {
        setStateForLeaveSchema(res.data.data)
      })
      .catch(err => {
        console.log(err)
      }) // eslint-disable-line
  }

  const noOfEmployees = useSelector(
    state => state.rootReducer.InformationReducer.information.noOfEmployees
  )
  console.log(
    'noOfEmployees :',
    noOfEmployees === undefined ? 'Employee Data not found' : noOfEmployees
  )

  useEffect(() => {
    const loginToken = JSON.parse(window.localStorage.getItem('handbook'))
    setLoginData(loginToken)

    GetStateLeaveData()
    const AllStateData = { singleState: singleStatePDF }
    setAllStateDataPDF([...allStateDataPDF, AllStateData])
  }, [singleStatePDF]) // eslint-disable-line

  const handleChange = name => e => {
debugger
    if (!state.includes(e.target.value)) {
      setData({
        ...data,
        [name]: [...state, e.target.value]
      })
    }
    statePDF(e.target.value)
  }

  const statePDF = id => {
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/state/get-state-pdf',
      data: { _id: id }
    })
      .then(res => {
        setSingleStatePDF(res.data.data)
      })
      .catch(err => console.log('Error :', err))
  }

  const handleDelete = name => e => {
    e.preventDefault()
    const stateArr = state
    const idx = stateArr.indexOf(name)
    stateArr.splice(idx, 1)

    setData({
      ...data,
      state: stateArr
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setData({ ...data, loading: true })
    if (!state || state.length === 0) {
      setData({ ...data, error: true, errormessage: 'please enter location' })
    } else {
      axios({
        url: createState,
        method: 'post',
        data: {
          userId: loginData.meta.id,
          state: state
        }
      })
        .then(res => {
          // console.log("Result :", res)
          sendToProgressBar()
          props.setStateAndLeavesInRedux(allStateDataPDF)
        })
        .catch(err => console.log('Error :', err))
    }
  }

  const sendToProgressBar = () => {
    props.barValue(14)
    props.flag('done')
  }

  const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0
      },
      '&:before': {
        display: 'none'
      },
      '&$expanded': {
        margin: 'auto'
      }
    },
    expanded: {}
  })(MuiAccordion)

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56
      }
    },
    content: {
      '&$expanded': {
        margin: '12px 0'
      }
    },
    expanded: {}
  })(MuiAccordionSummary)

  const AccordionDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiAccordionDetails)

  const handleAccordionChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const [LeaveSchema, setLeaveSchema] = useState([])

  const LeaveState = id => {
    debugger
    axios({
      url: `${process.env.REACT_APP_API_URL}/api/leave/getleaves`,
      method: 'POST',
      data: {
        stateId: id
      }
    })
      .then(res => {
        console.log('LeaveState:', res)
        setLeaveSchema(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
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
        ''
      )} */}
      <>
        <form onSubmit={handleSubmit} className='form-common State mx-5'>
          <div className='back-btn'>
            <strong
              className='btn-light '
              style={{ cursor: 'pointer', padding: '10px' }}
              onClick={() => props.page('from-State')}
            >
              <ArrowBackIcon />
            </strong>
          </div>
          <h1>State</h1>
          {error ? (
            <span className='alert alert-danger' role='alert'>
              {errormessage}
            </span>
          ) : (
            ''
          )}
          <div className='formgroup'>
            <label>Choose State :</label>

            <select
              name='state'
              id='state1'
              // value={state}
              className='form-control'
              onChange={handleChange('state')}
            >
              <option hidden>Select State</option>

              {StateForLeaveSchema.map(data => {
                return (
                  <option
                    key={data._id}
                    value={data._id}
                    className='capital-letter'
                  >
                    {data.name}
                  </option>
                )
              })}
            </select>
          </div>
          {state.map((e, i) => {
            return (
              <div key={i}>
                <div className='alert alert-primary selected-state'>
                  <div className='capital-letter'>
                    {StateForLeaveSchema.filter(data => data._id === e).map(
                      data => data.name
                    )}
                  </div>
                  <div className='selected-state-control'>
                    <span
                      onClick={() => {
                        debugger
                        LeaveState(
                          StateForLeaveSchema.filter(
                            data => data._id === e
                          ).map(data => data._id)
                        )
                        setPolicyToggle({
                          name: StateForLeaveSchema.filter(
                            data => data._id === e
                          ).map(data => data.name),
                          show: true
                        })
                      }}
                    > Click To View
                      {/* <VisibilityIcon /> */}
                    </span>
                    <span value={e} onClick={handleDelete(e)}>
                      <ClearIcon />
                    </span>
                  </div>
                </div>

                <div>
                  <Modal
                    className='capital-letter modal-state'
                    open={policyToggle.show}
                    onClose={() => setPolicyToggle({ name: '', show: false })}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                  >
                    <Box sx={style}>
                      <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                      >
                        {policyToggle.name} Leave Information
                      </Typography>

                      <div>
                        {LeaveSchema.map((data, i) => {
                          // if (
                          //   data._id === '6131a99896bbd19b50f4de82' &&
                          //   noOfEmployees > 15
                          // ) {
                          //   alert(100)
                          // }
                          return (
                            <Typography
                              id='modal-modal-description'
                              sx={{ mt: 2 }}
                              key={data._id}
                              variant='subtitle1'
                            >
                              <span>
                                <Accordion
                                  square
                                  expanded={expanded === i}
                                  onChange={handleAccordionChange(i)}
                                >
                                  <AccordionSummary
                                    aria-controls='panel1d-content'
                                    id='panel1d-header'
                                  >
                                    <span style={{ fontWeight: 'normal' }}>
                                      {data.title}
                                    </span>
                                  </AccordionSummary>

                                  {/* description mapping below */}
                                  <AccordionDetails className='internal-details-stateleave'>
                                    <span style={{ fontWeight: 'normal' }}>
                                      {data.description}
                                    </span>
                                  </AccordionDetails>
                                </Accordion>
                              </span>
                            </Typography>
                          )
                        })}
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            )
          })}
          <br />
          <button type='submit' className='btn'>
            Submit
          </button>
        </form>
      
      </>
    </div>
  )
}

  const mapStateToProps = state => ({
  stateAndLeavesFromRedux: state.rootReducer
})

const mapDispatchToProps = dispatch => {
  return {
    setStateAndLeavesInRedux: data => dispatch(addAllStateAndLeaves(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(States)
