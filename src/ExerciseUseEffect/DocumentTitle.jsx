import React, { useEffect, useState } from 'react'

const DocumentTitle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    return (
        <div className='flex h-screen items-center justify-center'>
            <button
                onClick={() => setCount(prev => prev + 1)}
                className='border p-3 py-1 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-500'
            >
                +
            </button>
        </div>
    )
}

export default DocumentTitle