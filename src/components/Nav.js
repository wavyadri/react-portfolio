import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../Adriana-logo.svg'
import {FaBars} from 'react-icons/fa'

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null); // for ul
    const linksRef = useRef(null); // for li

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`
        } else {
            linksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])

    return (
        <nav> 
            <div className='nav-main'>
                <div className='nav-logo'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
                </div>
                <div className='nav-links-container' ref={linksContainerRef}>
                    <ul className='nav-links' ref={linksRef}>
                        <li><Link to='/'>Home</Link></li>
                        <li><HashLink scroll to='/#about'>About</HashLink></li>
                        <li><HashLink scroll to='/#projects'>Projects</HashLink></li>
                        <li><HashLink to='/#contact'>Contact</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
