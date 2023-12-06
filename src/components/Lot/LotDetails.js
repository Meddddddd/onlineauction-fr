import React, { useState, useEffect } from 'react';

const LotDetails = ({ lot }) => {
    const { id, name, description, image, minimum_price, current_price, isAvailable, category, creator, winner, bets } = lot;

    return (
        <div>
            <h2>Lot Details</h2>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Image: {image}</p>
            <p>Minimum Price: {minimum_price}</p>
            <p>Current Price: {current_price}</p>
            <p>Is Available: {isAvailable ? 'Yes' : 'No'}</p>
            <p>Category: {category.title}</p>
            <p>Creator: {creator.first_name} {creator.last_name}</p>
            <p>Winner: {winner ? `${winner.first_name} ${winner.last_name}` : 'None'}</p>
            <p>Bets:</p>
            <ul>
                {bets.map(bet => (
                    <li key={bet.id}>{bet.full_name} - {bet.price}</li>
                ))}
            </ul>
        </div>
    );
};

const LotComponent = () => {
    const [lot, setLot] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных о лоте по его ID
        // Пример запроса:
        // fetch(`http://localhost:8080/api/lots/${lotId}`)
        //   .then(response => response.json())
        //   .then(data => setLot(data))
        //   .catch(error => console.error('Error fetching lot details:', error));

        // Временные данные для примера
        const temporaryLotData = {
            id: 1,
            name: 'Example Lot',
            description: 'This is an example lot',
            image: 'example_image.jpg',
            minimum_price: 100,
            current_price: 120,
            isAvailable: true,
            category: { id: 1, title: 'Example Category' },
            creator: { id: 1, first_name: 'John', last_name: 'Doe' },
            winner: { id: 2, first_name: 'Alice', last_name: 'Smith' },
            bets: [
                { id: 1, full_name: 'Bob Johnson', price: 110 },
                { id: 2, full_name: 'Eve Williams', price: 120 },
            ],
        };

        setLot(temporaryLotData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {lot ? <LotDetails lot={lot} /> : <p>Loading...</p>}
        </div>
    );
};

export default LotComponent;
