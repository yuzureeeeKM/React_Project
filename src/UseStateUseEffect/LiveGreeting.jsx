import React, { useEffect, useState } from 'react'

const LiveGreeting = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        console.log(`Hello ${user}!`)
    }, [user])

    return (
        <div>
            <input
                type="text"
                placeholder='Enter username...'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className='border px-3 py-1 rounded-md'
            />
        </div>
    )
}

export default LiveGreeting