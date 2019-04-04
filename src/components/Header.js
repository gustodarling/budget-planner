import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

// We render header on all pages through <Header />
export const Header = ({ startLogout }) => (
  <header className="header">
    <div className='content-container'>
      <div className='header__content'>
        <Link className='header__title' to="/dashboard">
          <h1>Expense</h1>
        </Link>
        <button className='button button--link' onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
)

// const Header = () => (
//   <header>
//     <h1>Expensify</h1>
//     <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
//     <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
//     <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
//     <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
//   </header>
// )

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)