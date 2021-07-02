import React, {useState, useEffect, useRef} from 'react'

const Typewriter = () => {
    let text = ['Web Developer', 'Problem Solver', 'Team Player'];

    let i = 0;
    let j = 0;

    const [currentWord, setCurrentWord] = useState('');
    const charIndex = useRef(0);
    const textIndex = useRef(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // const loop = () => {
    //     setIsDeleting(false);

    // //     if (i < text.length) {
    // //         // if we're typing and we haven't completed the word
    // //         if (!isDeleting && j <= text[textIndex].length) {
    // //             setCurrentWord((value) => value + text[textIndex].charAt(charIndex.current))
    // //             j++;
    // //         }

    //         // if(isDeleting && charIndex <= text[textIndex].length) {
    //         //     word.pop(text[textIndex][charIndex]);
    //         //     charIndex--;
    //         //     setCurrentWord(word.join(''));
    //         // }

    //         // if (charIndex == text[textIndex].length) {
    //         //     setIsDeleting(true);
    //         // }

    //         // if (isDeleting && charIndex === 0) {
    //         //     word = [];
    //         //     setIsDeleting(false);
    //         //     textIndex++;
    //         //     if(textIndex === word.length) {
    //         //         textIndex = 0;
    //         //     }
    //         // }
    //     }
       
    // }

    const loopLoop = () => {
        setIsDeleting(false);
        
        if (textIndex.current < text.length) {
            // if we're typing and we haven't completed the word
            if (!isDeleting && charIndex.current <= text[textIndex.current].length) {
                setCurrentWord((value) => value + text[textIndex.current].charAt(charIndex.current))
                charIndex.current += 1;
            }

            if (!isDeleting && charIndex.current > text[textIndex.current].length) {
                setCurrentWord(text[textIndex.current])
                setIsDeleting(true)
            }

            if(isDeleting && charIndex.current <= text[textIndex.current].length) {
                setCurrentWord((value) => value - text[textIndex.current].charAt(charIndex.current))
                charIndex.current -= 1;
            }

            // if(isDeleting && charIndex.current <= text[i].length) {
            //     setCurrentWord((value) => value - text[i].charAt(charIndex.current))
            //     charIndex.current -= 1;
            // }
        }
    }

   

    useEffect(() => {
        setTimeout(() => {
            loopLoop()}, 300)
        // return (() => {
        //     clearTimeout(timeoutID);
        // })
    }, [currentWord])


    return (
        <div>
            <h3>{currentWord}</h3>
        </div>
    )
}

export default Typewriter
