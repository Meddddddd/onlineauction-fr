import React, { useState } from 'react';

const CreateAuction = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateAuction = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auctions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
            });

            if (response.ok) {
                console.log('Auction created successfully');
                // Можете добавить обновление списка аукционов после успешного создания
            } else {
                console.error('Failed to create auction');
            }
        } catch (error) {
            console.error('Error during auction creation:', error);
        }
    };

    return (
        <div>
            <h2>Create Auction</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button onClick={handleCreateAuction}>Create Auction</button>
        </div>
    );
};

export default CreateAuction;
