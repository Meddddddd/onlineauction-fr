import React, { useState, useEffect } from 'react';

const CategoryDetails = ({ category }) => {
    const { id, title, description, lots } = category;

    return (
        <div>
            <h2>Category Details</h2>
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Lots:</p>
            <ul>
                {lots.map(lot => (
                    <li key={lot.id}>{lot.name}</li>
                ))}
            </ul>
        </div>
    );
};

const CategoryComponent = () => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Здесь вы можете добавить запрос к вашему бэкенду для получения данных о категории по её ID
        // Пример запроса:
        // fetch(`http://localhost:8080/api/categories/${categoryId}`)
        //   .then(response => response.json())
        //   .then(data => setCategory(data))
        //   .catch(error => console.error('Error fetching category details:', error));

        // Временные данные для примера
        const temporaryCategoryData = {
            id: 1,
            title: 'Example Category',
            description: 'This is an example category',
            lots: [{ id: 1, name: 'Lot 1' }, { id: 2, name: 'Lot 2' }],
        };

        setCategory(temporaryCategoryData);
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    return (
        <div>
            {category ? <CategoryDetails category={category} /> : <p>Loading...</p>}
        </div>
    );
};

export default CategoryComponent;
