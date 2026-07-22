import React, { useEffect, useState } from 'react'

const ClickerTracker = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Clicked ${count} time`)
    }, [count])

    return (
        <div >
            <button
                onClick={() => setCount(prev => prev + 1)}
                className='border px-3 py-1 rounded'
            >
                Click Tracker
            </button>
        </div>
    )
}

export default ClickerTracker