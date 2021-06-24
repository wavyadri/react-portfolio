import React, {useState, useEffect, useRef} from 'react'

const Typewriter = () => {
    let text = ['Web Developer', 'Problem Solver', 'Team Player'];
    // let textIndex = 0;

    const [currentWord, setCurrentWord] = useState('')
    const charIndex = useRef(0);
    const textIndex = useRef(0);

    

    useEffect(() => {
        setTimeout(() => {
            setCurrentWord((value) => value + text[0].charAt(charIndex.current));
            charIndex.current++;
        }, 300)
        // return (() => {
        //     clearTimeout(timeoutID);
        // })
    }, [currentWord, text])


    return (
        <div>
            <h3>{currentWord}</h3>
            <h3>hello</h3>
        </div>
    )
}

export default Typewriter
