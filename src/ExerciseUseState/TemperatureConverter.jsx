import React, { useState } from 'react'

const TemperatureConverter = () => {
    const [converterInput, setConverterInput] = useState("");
    const [convertedTemperature, setConvertedTemperature] = useState("");
    const [displayResult, setDisplayResult] = useState(false);
    const [message, setMessage] = useState(null);

    function fahrenheit(celsius) {
        if (isNaN(converterInput)) {
            setMessage("Please enter a valid number.");
            setConverterInput("");
            setDisplayResult(false);
            return;
        };

        if (!converterInput.trim()) {
            setMessage("Please enter a number.");
            setConverterInput("");
            setDisplayResult(false);
            return;
        };

        const fahren = Number(celsius) * 9 / 5 + 32

        setDisplayResult(true);
        setConvertedTemperature(fahren);
        setMessage("")
    }

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='border p-6 rounded-md text-center'>
                <h1 className='text-2xl mb-5'>Temperature Converter</h1>
                <input
                    type="text"
                    placeholder='Enter temperature...'
                    value={converterInput}
                    onChange={(e) => setConverterInput(e.target.value)}
                    className='border px-3 py-1 rounded-md'
                />
                <button
                    onClick={() => fahrenheit(converterInput)}
                    className='border px-3 py-1 rounded-md cursor-pointer ml-1 bg-blue-500 text-white hover:bg-blue-600'
                >
                    Convert
                </button>

                {displayResult && (
                    <p className='text-2xl mt-10'>{convertedTemperature}°F</p>
                )}

                {message && (
                    <p className='text-red-600 mt-2'>{message}</p>
                )}
            </div>

        </div>
    )
}

export default TemperatureConverter