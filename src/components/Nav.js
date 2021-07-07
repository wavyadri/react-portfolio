import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
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
                    <Link onClick={() => scroll.scrollToTop()}><img src={logo} alt="logo" /></Link>
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
                </div>
                <div className='nav-links-container' ref={linksContainerRef}>
                    <ul className='nav-links' ref={linksRef}>
                        <li><Link offset={-128} smooth={true} to='hero'>Home</Link></li>
                        <li><Link offset={-128} smooth={true} to='about'>About</Link></li>
                        <li><Link offset={-128} smooth={true} to='projects'>Projects</Link></li>
                        <li><Link smooth={true} to='contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
