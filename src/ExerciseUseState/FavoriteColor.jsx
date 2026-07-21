import React, { useState } from 'react'

const FavoriteColor = () => {
    const [selectedFavorite, setSelectedFavorite] = useState("red");

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div>
                <select
                    value={selectedFavorite}
                    onChange={(e) => setSelectedFavorite(e.target.value)}
                    className='border px-2 py-1 rounded-md'
                >
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                </select>
                <h1>Your favorite color is {selectedFavorite}</h1>
            </div>
        </div>
    )
}

export default FavoriteColor