import React, { useState, useEffect } from 'react';

function LotList() {
    const [lots, setLots] = useState([]);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения списка лотов
        // Например, с использованием fetch или axios
        // Пример запроса:
        // fetch('http://localhost:8080/api/lots')
        //   .then(response => response.json())
        //   .then(data => setLots(data))
        //   .catch(error => console.error('Error fetching lots:', error));
    }, []);

    return (
        <div>
            <h2>Lot List</h2>
            <ul>
                {lots.map(lot => (
                    <li key={lot.id}>
                        <strong>{lot.name}</strong>
                        <p>{lot.description}</p>
                        {/* Дополнительная информация о лоте */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LotList;
