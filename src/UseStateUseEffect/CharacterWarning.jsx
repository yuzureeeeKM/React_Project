import React, { useEffect, useState } from 'react'

const CharacterWarning = () => {
    const [inputChar, setInputChar] = useState("");

    useEffect(() => {
        if (inputChar.length >= 50) {
            console.log('Too long!');
        }

    }, [inputChar])

    return (
        <div className='flex h-screen items-center justify-center'>
            <h1>{inputChar.length}</h1>
            <textarea
                value={inputChar}
                onChange={(e) => setInputChar(e.target.value)}
                className='border resize-none px-2 h-20'
            />
        </div>
    )
}

export default CharacterWarning