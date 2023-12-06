import React, { useState } from 'react';

const CreateCategory = () => {
    const [name, setName] = useState('');

    const handleCreateCategory = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                }),
            });

            if (response.ok) {
                console.log('Category created successfully');
                // Можете добавить обновление списка категорий после успешного создания
            } else {
                console.error('Failed to create category');
            }
        } catch (error) {
            console.error('Error during category creation:', error);
        }
    };

    return (
        <div>
            <h2>Create Category</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button onClick={handleCreateCategory}>Create Category</button>
        </div>
    );
};

export default CreateCategory;
