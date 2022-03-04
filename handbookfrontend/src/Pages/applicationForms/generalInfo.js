// @ts-nocheck
import React, { useState, useEffect } from 'react'
import Information from '../Forms/information'
import HolidayPay from '../Forms/HolidayPay'
import './generalInfo.css'
import CompanyVehicles from '../Forms/CompanyVehicles'
import PayRoll from '../Forms/PayRoll'
import CompanyStruture from '../Forms/CompanyStructure'
import States from '../Forms/States'
import FireExits from '../Forms/FireExits'
import PdfComponent from '../Forms/Pdf'

const GeneralInformation = props => {
  /* eslint multiline-ternary: ["error", "never"] */

  const [generalinformationFlag, setgeneralinformationFlag] = useState(true)
  const [statesFlag, setstatesFlag] = useState(false)
  const [companystructureFlag, setcompanystructureFlag] = useState(false)
  const [fireexitsFlag, setfireexitsFlag] = useState(false)
  const [payrollcycleFlag, setpayrollcycleFlag] = useState(false)
  const [companyvehicleFlag, setcompanyvehicleFlag] = useState(false)
  const [holidaypayFlag, setholidaypayFlag] = useState(false)
  const [pdfFlag, setPdfFlag] = useState(false)

  const [progressBar, setProgressBar] = useState(0)

  const [disable, setDisable] = useState({
    generalInformation: false,
    states: false,
    companyStructure: false,
    fireExit: false,
    payrollCycle: false,
    companyVehicles: false,
    holidayPay: false
  })

  const handleFlagChange = name => () => {
    if (name === 'generalinformationFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(!generalinformationFlag)
      setholidaypayFlag(false)
      setcompanystructureFlag(false)
      setfireexitsFlag(false)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(false)
    } else if (name === 'statesFlag') {
      setstatesFlag(!statesFlag)
      setgeneralinformationFlag(false)
      setholidaypayFlag(false)
      setcompanystructureFlag(false)
      setfireexitsFlag(false)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(false)
    } else if (name === 'companystructureFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(false)
      setholidaypayFlag(false)
      setcompanystructureFlag(!companystructureFlag)
      setfireexitsFlag(false)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(false)
    } else if (name === 'fireexitsFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(false)
      setholidaypayFlag(false)
      setcompanystructureFlag(false)
      setfireexitsFlag(!fireexitsFlag)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(false)
    } else if (name === 'payrollcycleFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(false)
      setholidaypayFlag(false)
      setcompanystructureFlag(false)
      setfireexitsFlag(false)
      setpayrollcycleFlag(!payrollcycleFlag)
      setcompanyvehicleFlag(false)
    } else if (name === 'companyvehicleFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(false)
      setholidaypayFlag(false)
      setcompanystructureFlag(false)
      setfireexitsFlag(false)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(!companyvehicleFlag)
    } else if (name === 'holidaypayFlag') {
      setstatesFlag(false)
      setgeneralinformationFlag(false)
      setholidaypayFlag(!holidaypayFlag)
      setcompanystructureFlag(false)
      setfireexitsFlag(false)
      setpayrollcycleFlag(false)
      setcompanyvehicleFlag(false)
    }
    setPdfFlag(false)
  }

  //   for Information Component ----------------------------------------------------------------------------------------
  const fromInformationComp = item => {
    setProgressBar(item)
    setDisable({ ...disable, generalInformation: true, states: false })
  }

  const changeInformationState = item => {
    setgeneralinformationFlag(false)
    setstatesFlag(true)
  }

  //   for States Component ----------------------------------------------------------------------------------------
  const fromStateComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, states: true, companyStructure: false })
  }

  const changeStateState = item => {
    setstatesFlag(false)
    setcompanystructureFlag(true)
  }

  //   for Company Structure Component ----------------------------------------------------------------------------------------
  const fromCompanyStructureComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, companyStructure: true, fireExit: false })
  }

  const changeCompanyStructureState = item => {
    setcompanystructureFlag(false)
    setfireexitsFlag(true)
  }

  //   for Fire Exit Component ----------------------------------------------------------------------------------------
  const fromFireExitComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, fireExit: true, payrollCycle: false })
  }

  const changeFireExitState = item => {
    setfireexitsFlag(false)
    setpayrollcycleFlag(true)
  }

  const onPage = item => {
    if (item === 'from-State') {
      setstatesFlag(false)
      setgeneralinformationFlag(true)
    }
    if (item === 'from-CompanyStructure') {
      setcompanystructureFlag(false)
      setstatesFlag(true)
    }
    if (item === 'from-FireExit') {
      setfireexitsFlag(false)
      setcompanystructureFlag(true)
    }
    if (item === 'from-PayrollCycle') {
      setpayrollcycleFlag(false)
      setfireexitsFlag(true)
    }
    if (item === 'from-CompanyVehicles') {
      setcompanyvehicleFlag(false)
      setpayrollcycleFlag(true)
    }
    if (item === 'from-HolidayPay') {
      setholidaypayFlag(false)
      setcompanyvehicleFlag(true)
    }
  }

  //   for PayRoll Component ----------------------------------------------------------------------------------------
  const fromPayRollComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, payrollCycle: true, companyVehicles: false })
  }

  const changePayRollState = item => {
    setpayrollcycleFlag(false)
    setcompanyvehicleFlag(true)
  }

  //   for Company Vehicles Component ----------------------------------------------------------------------------------------
  const fromCompanyVehiclesComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, companyVehicles: true, holidayPay: false })
  }

  const changeCompanyVehiclesState = item => {
    setcompanyvehicleFlag(false)
    setholidaypayFlag(true)
  }

  //   for Holiday Pay Component ----------------------------------------------------------------------------------------
  const fromHolidayPayComp = item => {
    setProgressBar(progressBar + item)
    setDisable({ ...disable, holidayPay: true })
    setPdfFlag(true)
  }

  useEffect(() => {
    if (!window.localStorage.getItem('handbook')) {
      props.history.push({
        pathname: '/login'
      })
    }
  }, []) // eslint-disable-line

  // console.log('GeneralInfo ProgressBar Value :', progressBar)
  return (
    <div className='page-tabber'>
      <div className='containter'>
        <div className='form-tabber'>
          <div className='form-tabber-left'>
            <div className='form-tabber-left-top'>
              <div className='progress'>
                <div
                  className='progress-bar progress-bar-striped bg-warn'
                  role='progressbar'
                  style={{ width: `${progressBar}%` }}
                  aria-valuenow={progressBar}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {progressBar === undefined ? 0 : progressBar}%
                </div>
              </div>
              {/* <div className='form-tabber-left-top-btn'>
                <button type='button' className='btn'>
                  review
                </button>
                <button type='button' className='btn'>
                  submit
                </button>
              </div> */}
            </div>
            <div className='form-tabber-left-bottom'>
              <button
                type='button'
                className='btn'
                disabled={disable.generalInformation}
                id='generalInformation'
                onClick={handleFlagChange('generalinformationFlag')}
              >
                General Information
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.states}
                id='states'
                onClick={handleFlagChange('statesFlag')}
              >
                States
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.companyStructure}
                id='companyStructure'
                onClick={handleFlagChange('companystructureFlag')}
              >
                Company Structure
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.fireExit}
                id='fireExit'
                onClick={handleFlagChange('fireexitsFlag')}
              >
                Fire Exits
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.payrollCycle}
                id='payrollCycle'
                onClick={handleFlagChange('payrollcycleFlag')}
              >
                Payroll Cycle
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.companyVehicles}
                id='companyVehicles'
                onClick={handleFlagChange('companyvehicleFlag')}
              >
                Company Vehicles
              </button>
              <button
                type='button'
                className='btn'
                disabled={disable.holidayPay}
                id='holidayPay'
                onClick={handleFlagChange('holidaypayFlag')}
              >
                Holiday Pay
              </button>
            </div>
          </div>
          <div className='form-tabber-right'>
            {generalinformationFlag ? (
              <Information
                barValue={fromInformationComp}
                flag={changeInformationState}
              />
            ) : (
              ''
            )}
            {statesFlag ? (
              <States
                barValue={fromStateComp}
                flag={changeStateState}
                page={onPage}
              />
            ) : (
              ''
            )}
            {companystructureFlag ? (
              <CompanyStruture
                barValue={fromCompanyStructureComp}
                data={changeCompanyStructureState}
                page={onPage}
              />
            ) : (
              ''
            )}
            {fireexitsFlag ? (
              <FireExits
                barValue={fromFireExitComp}
                data={changeFireExitState}
                page={onPage}
              />
            ) : (
              ''
            )}
            {payrollcycleFlag ? (
              <PayRoll
                barValue={fromPayRollComp}
                flag={changePayRollState}
                page={onPage}
              />
            ) : (
              ''
            )}

            {companyvehicleFlag ? (
              <CompanyVehicles
                barValue={fromCompanyVehiclesComp}
                flag={changeCompanyVehiclesState}
                page={onPage}
              />
            ) : (
              ''
            )}
            {holidaypayFlag ? (
              <HolidayPay barValue={fromHolidayPayComp} page={onPage} />
            ) : (
              ''
            )}

            {pdfFlag ? <PdfComponent /> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInformation
  