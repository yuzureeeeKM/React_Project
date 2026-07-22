import React, { useEffect, useState } from 'react'

const PageVisitCounter = () => {
    let [refresh, setRefresh] = useState(() => {
        const getVal = localStorage.getItem('refreshVal');
        return getVal ? JSON.parse(getVal) : 0
    });

    useEffect(() => {
        const updRefresh = refresh + 1;
        setRefresh(updRefresh)
        localStorage.setItem('refreshVal', JSON.stringify(updRefresh))
    }, []);

    return (
        <div>
            <h1>You visited this page {refresh} times.</h1>
        </div>
    )
}

export default PageVisitCounter