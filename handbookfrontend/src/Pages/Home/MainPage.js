import React from 'react'
import { Link } from 'react-router-dom'
const MainPage = () => {
  return (
    <div className='login-container'>
      <div>
        <Link className='btn' style={{ margin: '10rem 0' }} to='/home'>
          Employee Handbook Builder
        </Link>
      </div>
    </div>
  )
}

export default MainPage
