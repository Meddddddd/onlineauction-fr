import React, { useState, useEffect } from 'react';

const ResultOfAuctionDetails = ({ resultOfAuction }) => {
    const { id, nameAuction, start, ends } = resultOfAuction;

    return (
        <div>
            <h2>Result Of Auction Details</h2>
            <p>ID: {id}</p>
            <p>Name of Auction: {nameAuction}</p>
            <p>Start: {start}</p>
            <p>Ends: {ends}</p>
        </div>
    );
};

const ResultOfAuctionComponent = () => {
    const [resultOfAuction, setResultOfAuction] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных о результатах аукциона
        // Пример запроса:
        // fetch('http://localhost:8080/api/resultsOfAuctions/some-result-id')
        //   .then(response => response.json())
        //   .then(data => setResultOfAuction(data))
        //   .catch(error => console.error('Error fetching result of auction details:', error));

        // Временные данные для примера
        const temporaryResultOfAuctionData = {
            id: 1,
            nameAuction: 'Example Auction',
            start: '2023-01-01T00:00:00Z',
            ends: '2023-01-10T00:00:00Z',
        };

        setResultOfAuction(temporaryResultOfAuctionData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {resultOfAuction ? <ResultOfAuctionDetails resultOfAuction={resultOfAuction} /> : <p>Loading...</p>}
        </div>
    );
};

export default ResultOfAuctionComponent;
