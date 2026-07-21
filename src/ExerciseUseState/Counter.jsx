import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='flex h-full items-center justify-center mt-50'>
      <div className='border w-fit  p-15 text-center rounded-md'>
        <h1 className='text-9xl text-gray-800'>{counter}</h1>

        <div className='flex gap-5'>
          <button
            onClick={() => setCounter(prev => prev - 1)}
            disabled={counter === 0}
            className={` px-4 py-1 text-3xl rounded-md 
              ${counter === 0
                ? `bg-red-200 text-gray-400 cursor-not-allowed`
                : `bg-red-400 text-white cursor-pointer`
              }`}
          >
            -
          </button>
          <button
            onClick={() => setCounter(prev => prev + 1)}
            className='border px-3 py-1 text-3xl rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600'
          >
            +
          </button>

        </div>
      </div>
    </div>
  )
}

export default Counter