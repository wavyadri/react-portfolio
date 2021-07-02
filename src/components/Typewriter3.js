import React from 'react'
import Typewriter from "typewriter-effect";


const Typewriter3 = () => {
    return (
        <div>
            <h3><Typewriter
            onInit={(typewriter)=> {
                typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Problem Solver")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Team Player")
                .start();
                }}/>
            </h3>
        </div>
    )
}

export default Typewriter3
