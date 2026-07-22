import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [toggleButton, setToggleButton] = useState(false);

    const toggle = () => setToggleButton(prevButton => !prevButton);

    useEffect(() => {
        document.body.style.backgroundColor = toggleButton ? 'black' : 'white';
    }, [toggleButton])

    return (
        <div className='flex h-screen items-center justify-center'>
            <button
                onClick={toggle}
                className={`border text-2xl px-3 py-2 rounded-md cursor-pointer 
                    ${toggleButton
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    }`}
            >
                {toggleButton ? 'Light mode' : 'Dark mode'}
            </button>
        </div>
    )
}

export default ThemeToggle