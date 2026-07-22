import React, { useState } from 'react'

const PasswordVisibility = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const show = () => setShowPassword(prevShow => !prevShow);

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='flex gap-1'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className='border px-3 py-1 rounded-md'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={show}
                    className='border px-3 py-1 rounded-md cursor-pointer'
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    )
}

export default PasswordVisibility