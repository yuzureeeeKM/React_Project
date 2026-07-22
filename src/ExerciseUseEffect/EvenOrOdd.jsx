import React, { useEffect, useState } from 'react'

const EvenOrOdd = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        count % 2 == 0
            ? console.log("Even")
            : console.log("Odd")
    }, [count])

    return (
        <div>
            <h1 className='text-2xl'>{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} className='border px-3 py-1 rounded-md'>+</button>
        </div>
    )
}

export default EvenOrOdd