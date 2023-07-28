import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" ="#">{props.title}</a> */}
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// adding checks for the type of props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,// isRequired will only work when default props are not set
    aboutText: PropTypes.string.isRequired
}

// if we want to pass default props then we can give like give below.

// we should add default code for better practice

// adding default props
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About text here"
}