import React, { useState } from 'react'

const LoginSimulation = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(null);
    const [message, setMessage] = useState(null);

    function handleFunction(e) {
        e.preventDefault();

        if (!username.trim()) return setMessage('Please input username.');
        if (!password.trim()) return setMessage('Please input password.');

        setLoggedIn(username);

        setUsername("");
        setPassword("");
        setMessage("");
    }

    return (
        <div className='flex min-h-screen items-center justify-center text-center'>
            <form onSubmit={handleFunction}>
                <div className=''>
                    <input
                        type="text"
                        placeholder='Enter username...'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='border px-2 py-1 rounded-md mb-2'
                    />
                    <br />
                    <input
                        type="password"
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border px-2 py-1 rounded-md mb-2'
                    />
                    <br />

                    <button
                        type='submit'
                        className='border px-8 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                    >
                        login
                    </button>

                    {loggedIn && (
                        <p>Hello {loggedIn}!</p>
                    )}

                    {message && (
                        <p className='text-red-600'>{message}</p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default LoginSimulation