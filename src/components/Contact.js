import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <h2>let's work together</h2>
                <h3>Do you have a project in mind?</h3>
                <a href="mailto:adriana.calvomatos@gmail.com?" class="contact-btn">Reach me via email</a>
                <h3>You can find me on</h3>
                <ul>
                    <li>
                        <a href="https://github.com/wavyadri" class="contact-btn" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adriana-cm/" class="contact-btn" target="_blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact
