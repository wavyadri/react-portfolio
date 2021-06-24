import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../Adriana-logo.svg'

const Nav = () => {
    return (
        <nav> 
            <div className='nav-main'>
                <div className='nav-logo'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><HashLink scroll to='/#about'>About</HashLink></li>
                    <li><HashLink scroll to='/#projects'>Projects</HashLink></li>
                    <li><HashLink to='/#contact'>Contact</HashLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
