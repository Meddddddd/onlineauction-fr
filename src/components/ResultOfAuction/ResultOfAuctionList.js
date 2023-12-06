import React, { useState, useEffect } from 'react';

function ResultOfAuctionList() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения списка результатов аукционов
        // Пример запроса:
        // fetch('http://localhost:8080/api/resultsOfAuctions')
        //   .then(response => response.json())
        //   .then(data => setResults(data))
        //   .catch(error => console.error('Error fetching results:', error));
    }, []);

    return (
        <div>
            <h2>Result Of Auction List</h2>
            <ul>
                {results.map(result => (
                    <li key={result.id}>
                        <p>{/* Дополнительная информация о результате аукциона */}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultOfAuctionList;
