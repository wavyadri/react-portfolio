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
                <ul class="social-links">
                    <li><a class="btn btn-1" href="mailto:adriana.calvomatos@gmail.com?"><HiOutlineMail className='icon'/></a></li>
                    <li><a class="btn btn-2" href="https://github.com/wavyadri" role="button" target="_blank"><AiOutlineGithub className='icon'/></a></li>
                    <li><a class="btn btn-3" href="https://www.linkedin.com/in/adriana-cm/" role="button" target="_blank"><FaLinkedin className='icon'/></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Hero
