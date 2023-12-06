import React, { useState } from 'react';

function CreateLot() {
    const [lotName, setLotName] = useState('');
    const [lotDescription, setLotDescription] = useState('');

    const handleCreateLot = async () => {
        // Здесь вы можете добавить запрос к вашему бэкенду для создания нового лота
        // Например, с использованием fetch или axios
        // Пример запроса:
        // const response = await fetch('http://localhost:8080/api/lots', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ name: lotName, description: lotDescription }),
        // });
        // if (response.ok) {
        //   // Обработка успешного создания лота
        // } else {
        //   // Обработка ошибки при создании лота
        // }
    };

    return (
        <div>
            <h2>Create Lot</h2>
            <label>
                Lot Name:
                <input type="text" value={lotName} onChange={(e) => setLotName(e.target.value)} />
            </label>
            <label>
                Lot Description:
                <textarea value={lotDescription} onChange={(e) => setLotDescription(e.target.value)} />
            </label>
            <button onClick={handleCreateLot}>Create Lot</button>
        </div>
    );
}

export default CreateLot;
