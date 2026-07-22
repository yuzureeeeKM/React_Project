import React, { useEffect, useState } from 'react'

const NameLogger = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border px-3 py-1 rounded-md'
            />
        </div>
    )
}

export default NameLogger