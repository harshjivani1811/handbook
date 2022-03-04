// import react from "react";
// import { render } from "react-dom";
import { Link, withRouter } from 'react-router-dom'

const Header = ({ history }) => {
  return (
    /* eslint multiline-ternary: ["error", "never"] */
    <header>
      <nav className='navbar navbar-expand-lg navbar-bright bg-dark'>
        <Link className='navbar-brand text-white' to='/'>
          Employee Handbook Builder
        </Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <span className='mobile-menu' />
        <div
          className='collapse navbar-collapse'
          style={{ cursor: 'pointer' }}
          id='navbarNav'
        >
          {window.localStorage.getItem('handbook') ? (
            <ul className='navbar-nav'>
              <div
                className='nav-link text-white'
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.localStorage.removeItem('handbook')
                    history.push('/login')
                  }
                }}
              >
                Logout
              </div>
            </ul>
          ) : (
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link text-white' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export default withRouter(Header)
