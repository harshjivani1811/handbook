import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import MainPage from './../Pages/Home/MainPage'
import Home from '../Pages/Home/Home'
import Header from '../Components/Header'
import GeneralInformation from '../Pages/applicationForms/generalInfo'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import CompanyStruture from '../Pages/Forms/CompanyStructure'
import CompanyVehicles from '../Pages/Forms/CompanyVehicles'
import FireExits from '../Pages/Forms/FireExits'
import Information from '../Pages/Forms/information'
import PayRoll from '../Pages/Forms/PayRoll'
import States from '../Pages/Forms/States'
import HolidayPay from '../Pages/Forms/HolidayPay'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path='/' exact component={MainPage} /> */}
        <Route path='/' exact component={Home} />
        <Route path='/info' exact component={GeneralInformation} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/structure' exact component={CompanyStruture} />
        <Route path='/vehicle' exact component={CompanyVehicles} />
        <Route path='/fireexit' exact component={FireExits} />
        <Route path='/information' exact component={Information} />
        <Route path='/payroll' exact component={PayRoll} />
        <Route path='/state' exact component={States} />
        <Route path='/holidaypay' exact component={HolidayPay} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
