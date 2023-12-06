import React, { useState, useEffect } from 'react';

const UserDetails = ({ user }) => {
    const { id, first_name, last_name, email, image, role, notifications, isBlocked, listOfCreatedLots, listLotOfWinning, bets } = user;

    return (
        <div>
            <h2>User Details</h2>
            <p>ID: {id}</p>
            <p>Name: {first_name} {last_name}</p>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <p>Image: {image}</p>
            <p>Blocked: {isBlocked ? 'Yes' : 'No'}</p>

            <h3>Notifications:</h3>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>

            <h3>Created Lots:</h3>
            <ul>
                {listOfCreatedLots.map((lot, index) => (
                    <li key={index}>{lot.name}</li>
                ))}
            </ul>

            <h3>Lots Winning:</h3>
            <ul>
                {listLotOfWinning.map((lot, index) => (
                    <li key={index}>{lot.name}</li>
                ))}
            </ul>

            <h3>Bets:</h3>
            <ul>
                {bets.map((bet, index) => (
                    <li key={index}>{bet.name_lot} - Price: {bet.price}</li>
                ))}
            </ul>
        </div>
    );
};

const UserComponent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных о пользователе
        // Пример запроса:
        // fetch('http://localhost:8080/api/users/some-user-id')
        //   .then(response => response.json())
        //   .then(data => setUser(data))
        //   .catch(error => console.error('Error fetching user details:', error));

        // Временные данные для примера
        const temporaryUserData = {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            image: 'profile-image.jpg',
            role: 'user',
            notifications: ['Notification 1', 'Notification 2'],
            isBlocked: false,
            listOfCreatedLots: [{ name: 'Lot 1' }, { name: 'Lot 2' }],
            listLotOfWinning: [{ name: 'Lot 3' }],
            bets: [{ name_lot: 'Lot 1', price: 100 }, { name_lot: 'Lot 2', price: 150 }],
        };

        setUser(temporaryUserData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {user ? <UserDetails user={user} /> : <p>Loading...</p>}
        </div>
    );
};

export default UserComponent;
