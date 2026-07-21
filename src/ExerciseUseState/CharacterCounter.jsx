import React, { useState } from 'react'

const CharacterCounter = () => {
    const [charactedCounter, setCharacterCounter] = useState("");

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div>
                <h1 className='text-center text-2xl mb-5'>Character Counter</h1>
                <textarea
                    value={charactedCounter} onChange={(e) => setCharacterCounter(e.target.value)}
                    className='resize-none border rounded-md p-4 h-30 '
                />
                <h1 className='text-xl'>Character: {charactedCounter.length}</h1>
            </div>
        </div>
    )
}

export default CharacterCounter