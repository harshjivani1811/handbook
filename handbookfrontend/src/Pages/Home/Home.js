import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='page-home'>
      <div className='overlay' />
      <div className='container'>
        <h3 className='main-title'>Build a Customized Employee Handbook</h3>
        <section className='subscription'>
          <div className='subscription-left'>
            <p>
              <b>24/7</b>HR Consulting for
            </p>
            <div>
              <h2>$99</h2> <div>per month</div>
            </div>
            <span>
              One time setup fee for $700.00* and get a customized Employee
              Handbook.
              <br /> <span>*Per State</span>
            </span>
          </div>
          <div className='subscription-right'>
            <h2 style={{ textAlign: 'center' }}>
              <span>Customize a</span>Employee Handbook
            </h2>
            <Link to='/info' className='btn '>
              Build Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
export default Home
