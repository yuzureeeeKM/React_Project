import React, { useState } from 'react'

const Toggle = () => {
    const [show, setShow] = useState(false);

    const showText = () => setShow(!show);

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div>

                {show && (
                    <h1 className='text-lg'>Hello World!</h1>
                )}

                <button
                    onClick={showText}
                    className={`border text-2xl px-4 py-2 rounded-lg cursor-pointer text-white mt-15
                        ${show
                            ? `bg-blue-500`
                            : `bg-red-500`
                        }`}
                >
                    {show ? 'Hide' : "Show"}
                </button>

            </div>

        </div>
    )
}

export default Toggle