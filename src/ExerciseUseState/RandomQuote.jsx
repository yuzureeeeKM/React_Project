import React, { useState } from 'react'

const RandomQuote = () => {
    const quotes = [
        "Never give up.",
        "Practice makes progress.",
        "Keep learning.",
        "Believe in yourself."
    ];

    const [newQuotes, setNewQuotes] = useState("");

    const generateQuotes = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setNewQuotes(quotes[randomIndex])
    };

    return (
        <div>
            <h1>{newQuotes}</h1>
            <button
                onClick={generateQuotes}
                className='border px-4 py-2 rounded-md cursor-pointer'
            >
                New Quotes
            </button>
        </div>
    )
}

export default RandomQuote