import React, { useState, useEffect } from 'react';

const BetList = () => {
    const [bets, setBets] = useState([]);

    useEffect(() => {
        const fetchBets = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/bets');
                if (response.ok) {
                    const data = await response.json();
                    setBets(data);
                } else {
                    console.error('Failed to fetch bets');
                }
            } catch (error) {
                console.error('Error during fetch:', error);
            }
        };

        fetchBets();
    }, []);

    return (
        <div>
            <h2>Bet List</h2>
            <ul>
                {bets.map((bet) => (
                    <li key={bet.id}>
                        Amount: {bet.amount}, Lot ID: {bet.lot.id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BetList;
