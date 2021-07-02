import React from 'react'
import Typewriter from "typewriter-effect";


const Typewriter3 = ({words}) => {
    return (
        <div id='typewriter'>
            <h2><Typewriter
            options={{
                strings: words,
                autoStart: true,
                loop: true,
                pauseFor: 2000,
            }}></Typewriter>
            </h2>
        </div>
    )
}

export default Typewriter3
