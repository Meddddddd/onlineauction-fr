import React, { useState, useEffect } from 'react';

const BetDetails = ({ bet }) => {
    const { id, full_name, name_lot, price, date, user, lot } = bet;

    return (
        <div>
            <h2>Bet Details</h2>
            <p>ID: {id}</p>
            <p>Full Name: {full_name}</p>
            <p>Lot Name: {name_lot}</p>
            <p>Price: {price}</p>
            <p>Date: {date}</p>
            <p>User: {user.first_name} {user.last_name}</p>
            <p>Lot: {lot.name}</p>
        </div>
    );
};

const BetComponent = () => {
    const [bet, setBet] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных о ставке по её ID
        // Пример запроса:
        // fetch(`http://localhost:8080/api/bets/${betId}`)
        //   .then(response => response.json())
        //   .then(data => setBet(data))
        //   .catch(error => console.error('Error fetching bet details:', error));

        // Временные данные для примера
        const temporaryBetData = {
            id: 1,
            full_name: 'John Doe',
            name_lot: 'Example Lot',
            price: 100,
            date: '2023-01-01T12:00:00',
            user: { first_name: 'John', last_name: 'Doe' },
            lot: { name: 'Example Lot' },
        };

        setBet(temporaryBetData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {bet ? <BetDetails bet={bet} /> : <p>Loading...</p>}
        </div>
    );
};

export default BetComponent;
