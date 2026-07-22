import React, { useState } from 'react'

const RollDice = () => {
    const [roll, setRoll] = useState(null);

    const randomDice = () => Math.floor(Math.random() * 10) + 1;

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='text-center border p-10'>

                <button
                    onClick={() => setRoll(randomDice())}
                    className='border px-3 py-1 cursor-pointer rounded-md mb-5'
                >
                    Roll Dice
                </button>

                {roll !== null && (
                    <h1 className='text-4xl mt-2'>🎲{roll}</h1>
                )}

            </div>
        </div>
    )
}

export default RollDice