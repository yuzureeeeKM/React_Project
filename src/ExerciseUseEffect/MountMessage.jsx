import React, { useEffect } from 'react'

const MountMessage = () => {
    //once
    useEffect(() => console.log('Welcome!'), [])

    return (
        <div>

        </div>
    )
}

export default MountMessage