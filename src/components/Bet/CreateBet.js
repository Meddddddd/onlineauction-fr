import React, { useState } from 'react';

const CreateBet = () => {
    const [amount, setAmount] = useState('');
    const [lotId, setLotId] = useState('');

    const handleCreateBet = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/bets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    lot: { id: lotId }, // Подставьте реальные данные лота
                }),
            });

            if (response.ok) {
                console.log('Bet created successfully');
                // Можете добавить обновление списка ставок после успешного создания
            } else {
                console.error('Failed to create bet');
            }
        } catch (error) {
            console.error('Error during bet creation:', error);
        }
    };

    return (
        <div>
            <h2>Create Bet</h2>
            <div>
                <label>Amount:</label>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Lot ID:</label>
                <input type="text" value={lotId} onChange={(e) => setLotId(e.target.value)} />
            </div>
            <button onClick={handleCreateBet}>Create Bet</button>
        </div>
    );
};

export default CreateBet;
