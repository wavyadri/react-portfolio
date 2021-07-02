import React, { useEffect, useRef, useState } from 'react'

const Typewriter2 = ({words}) => {

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [duration, setDuration] = useState(200);
    const [currentWord, setCurrentWord] = useState("");
    const spedUp = 50;
    const normalSpeed = 230;

    useEffect(() => {
        const interval = setInterval(() => {

          let newSubIndex = subIndex;
          let newIndex = index % words.length;

          setIsEnd(false);

            if (!isDeleting && subIndex <= words[newIndex].length) {
                setCurrentWord((prev) => prev.concat(words[newIndex][subIndex]));
                newSubIndex += 1;
            }

            if (isDeleting && subIndex >= 0) {
                setCurrentWord((prev) => prev.substring(0, prev.length - 1));
                newSubIndex -= 1;
            }

            if (newSubIndex === words[newIndex].length) {
                setIsEnd(true);
                setIsDeleting(true);
            }

            if (newSubIndex === 0 && isDeleting) {
                setCurrentWord("");
                setIsDeleting(false);
                newIndex += 1;
            }

            setSubIndex(newSubIndex);
            setIndex(newIndex);

            setDuration(isDeleting ? spedUp : normalSpeed);
        }, duration);

        return () => clearInterval(interval);
    }, [subIndex, index, currentWord, isEnd, isDeleting, duration, words])

    return (
        <>
            <h3>{currentWord}</h3>
        </>
    )
}

export default Typewriter2