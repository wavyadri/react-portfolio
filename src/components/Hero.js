import React from 'react'
import Typewriter from './Typewriter';
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container">
                <h1>hi, I'm Adriana</h1>
                <h2>typewriter</h2>
                <ul className="social-links">
                    <li><a href="mailto:adriana.calvomatos@gmail.com?"><HiOutlineMail className='icon'/></a></li>
                    <li><a href="https://github.com/wavyadri" role="button" target="_blank"><AiOutlineGithub className='icon'/></a></li>
                    <li><a href="https://www.linkedin.com/in/adriana-cm/" role="button" target="_blank"><FaLinkedin className='icon'/></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Hero
