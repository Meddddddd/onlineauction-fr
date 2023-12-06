import React, { useState, useEffect } from 'react';

const AuctionList = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/auctions');
                if (response.ok) {
                    const data = await response.json();
                    setAuctions(data);
                } else {
                    console.error('Failed to fetch auctions');
                }
            } catch (error) {
                console.error('Error during fetch:', error);
            }
        };

        fetchAuctions();
    }, []);

    return (
        <div>
            <h2>Auction List</h2>
            <ul>
                {auctions.map((auction) => (
                    <li key={auction.id}>
                        {auction.title} - {auction.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AuctionList;
