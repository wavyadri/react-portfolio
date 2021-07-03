import React from 'react'
import Adriana from '../images/adriana.jpg'
import {FaFileDownload, FaHtml5, FaCss3Alt, FaSass, FaReact} from 'react-icons/fa'
import {SiJavascript, SiAdobexd, SiVisualstudio} from 'react-icons/si'

const About = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="about-img">
                    <img src={Adriana} alt="Adriana" />
                </div>
                <div className="about-text">
                    <div className="about-me">
                        <h2>About</h2>
                        <p>Hey there! I am Adriana, a front-end developer based in Canada. 
                            My greatest strength as a developer is my ability to problem solve.
                            I genuinely find the challenge of tackling new projects to be fun, am fascinted by how many different ways we can solve the same problem and am hooked on the feeling of satisfaction I get once I solve a bug.
                        </p>
                    </div>
                    <div className="about-toolkit">
                        <h3>My Toolkit</h3>
                        <ul className='about-toolkit-icon'>
                            <li><FaHtml5 className='about-icon'/></li>
                            <li><FaCss3Alt className='about-icon'/></li>
                            <li><FaSass className='about-icon'/></li>
                            <li><SiAdobexd className='about-icon'/></li>
                            <li><SiJavascript className='about-icon'/></li>
                            <li><FaReact className='about-icon'/></li>
                            <li><SiVisualstudio className='about-icon'/></li>
                        </ul>
                    </div>
                    <div className="about-resume">
                        <h3>My Resume</h3>
                        <div className="about-resume-icon">
                            <a href="AdrianaCalvo-Matos_Resume.pdf" target="_blank"><FaFileDownload className='about-icon about-download'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
