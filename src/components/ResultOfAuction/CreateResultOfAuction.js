import React, { useState } from 'react';

function CreateResultOfAuction() {
    const [auctionId, setAuctionId] = useState('');

    const handleCreateResult = async () => {
        // Здесь вы можете добавить запрос к вашему бэкенду для создания нового результата аукциона
        // Пример запроса:
        // const response = await fetch('http://localhost:8080/api/resultsOfAuctions', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ auction: { id: auctionId } }),
        // });
        // if (response.ok) {
        //   // Обработка успешного создания результата аукциона
        // } else {
        //   // Обработка ошибки при создании результата аукциона
        // }
    };

    return (
        <div>
            <h2>Create Result Of Auction</h2>
            <label>
                Auction ID:
                <input type="text" value={auctionId} onChange={(e) => setAuctionId(e.target.value)} />
            </label>
            <button onClick={handleCreateResult}>Create Result</button>
        </div>
    );
}

export default CreateResultOfAuction;
