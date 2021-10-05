import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

//component 
import Logo from '../../img/logo.png';

function Header() {
    return (
        <>
            <div className="nav one-edge-shadow">
                <div className="logo-div-nav">
                    <img className='nav-logo' src={Logo} alt="Town and country electrical" />
                    <a href="/"><h1 className='nav-logo-name'>TOWN & COUNTRY ELECTRICAL</h1></a>
                </div>
                <div className="logo-div-links">
                    <h1><NavLink className='nav--link' exact to='/'>HOME</NavLink></h1>                    
                    
                    <div className='dropdown'>
                        <h1><NavLink className='nav--link deAct' to='/services/1' >SERVICES</NavLink></h1>
                        <div className='dropdown-content'>
                            <a href="/services/:0">Construction & Maintenance</a>
                            <a href="/services/:1">Hazardous Area Electrical</a>
                            <a href="/services/:3">MV Cable Services</a>
                            <a href='/services/:2'>Thermography</a>
                        </div>
                    </div>
                    
                    <h1><NavLink className='nav--link' to='/about'>ABOUT</NavLink></h1>
                    
                    {/* <h1><NavLink className='nav--link' to='/contactMe'>CONTACT</NavLink></h1> */}
                </div>
            </div>
        </>
    )
}

export default Header
