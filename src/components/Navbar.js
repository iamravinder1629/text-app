import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {
    const navstyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "500" : "lighter",
        }
    }
    return (

        <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><b>{props.title}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <NavLink style={navstyle} className="nav-link active" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={navstyle} className="nav-link" to="/about">About us </NavLink>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input className={`form-check-input bg-${props.mode}`} onClick={props.darkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode}</label>
                    </div>
                </div>

            </div>
        </nav>

    )
}
