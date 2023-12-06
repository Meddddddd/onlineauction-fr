import React, { useState, useEffect } from 'react';

const AuctionDetails = ({ auction }) => {
    const { id, title, description, start, ends, lots } = auction;

    return (
        <div>
            <h2>Auction Details</h2>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Start Time: {start}</p>
            <p>End Time: {ends}</p>
            <h3>Lots:</h3>
            <ul>
                {lots.map((lot) => (
                    <li key={lot.id}>{lot.name}</li>
                ))}
            </ul>
        </div>
    );
};

const AuctionComponent = () => {
    const [auction, setAuction] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных аукциона по его ID
        // Пример запроса:
        // fetch(`http://localhost:8080/api/auctions/${auctionId}`)
        //   .then(response => response.json())
        //   .then(data => setAuction(data))
        //   .catch(error => console.error('Error fetching auction details:', error));

        // Временные данные для примера
        const temporaryAuctionData = {
            id: 1,
            title: 'Example Auction',
            description: 'Auction description',
            start: '2023-01-01T00:00:00',
            ends: '2023-01-10T00:00:00',
            lots: [
                { id: 1, name: 'Lot 1' },
                { id: 2, name: 'Lot 2' },
            ],
        };

        setAuction(temporaryAuctionData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {auction ? <AuctionDetails auction={auction} /> : <p>Loading...</p>}
        </div>
    );
};

export default AuctionComponent;
