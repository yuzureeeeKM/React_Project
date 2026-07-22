import React, { useEffect, useState } from 'react'

const LoginGreeting = () => {
    const [username, setUsername] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (!username.trim()) return;

        console.log(`Welcome, ${username}`)
        setLoggedIn(true);
    }, [username])

    return (
        <div>
            <input
                type="text"
                placeholder='Enter username...'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border px-3 py-1'
            />
        </div>
    )
}

export default LoginGreeting