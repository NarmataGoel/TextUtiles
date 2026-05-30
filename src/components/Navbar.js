import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
     <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex">
      <button className="bg-secondary rounded mx-2" style={{ width: '30px', height: '30px' }} cursor="pointer" onClick={()=>{props.toggleMode('secondary')}}> </button>
      <button className="bg-danger rounded mx-2" style={{ width: '30px', height: '30px' }} cursor="pointer" onClick={()=>{props.toggleMode('danger')}}></button>
      <button className="bg-warning rounded mx-2" style={{ width: '30px', height: '30px' }} cursor="pointer" onClick={()=>{props.toggleMode('warning')}}></button>
      <button className="bg-primary rounded mx-2" style={{ width: '30px', height: '30px' }} cursor="pointer" onClick={()=>{props.toggleMode('primary')}}></button>
      </div>
    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onChange={()=>{props.toggleMode('null')}} checked={props.mode === 'dark'} />
  <label className="form-check-label" htmlFor="switchCheckDefault">toggle Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
// p should be small in start 
Navbar.propTypes ={
    title :PropTypes.string.isRequired,
    nextline : PropTypes.string
};
Navbar.defaultProps ={
    title :"set title here",
    nextline :"search here"
};