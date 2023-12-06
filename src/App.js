import React, { useState, useEffect } from 'react';
import Login from "./components/Auth/Login";
import AuctionList from "./components/Auction/AuctionList";
import CreateAuction from "./components/Auction/CreateAuction";
import BetList from "./components/Bet/BetList";
import CreateBet from "./components/Bet/CreateBet";
import CategoryList from "./components/Category/CategoryList";
import CreateCategory from "./components/Category/CreateCategory";
import ErrorDisplay from "./Error";
import LotList from "./components/Lot/LotList";
import CreateLot from "./components/Lot/CreateLot";
import ResultOfAuctionList from "./components/ResultOfAuction/ResultOfAuctionList";
import CreateResultOfAuction from "./components/ResultOfAuction/CreateResultOfAuction";
import UserList from "./components/User/UserList";
import CreateUser from "./components/User/CreateUser";
import './App.css';


function App() {
    const [token, setToken] = useState('');
    const [auctionItems, setAuctionItems] = useState([]);
    const [error, setError] = useState(null);

    const handleLogin = (userToken) => {
        setToken(userToken);
    };

    const handleError = (error) => {
        setError(error);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/auction-items', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setAuctionItems(data);
                } else {
                    console.error('Failed to fetch auction items:', response.statusText);
                }
            } catch (error) {
                console.error('Error during data fetch:', error);
                handleError({ message: 'Error during data fetch', path: '/api/auction-items' });
            }
        };

        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <div className="App">
            {token ? (
                <div>
                    <h1>Welcome to the Online Auction App!</h1>
                    {/* Дополнительный код для авторизованного пользователя */}
                    <AuctionList />
                    <CreateAuction />
                    <BetList />
                    <CreateBet />
                    <CategoryList />
                    <CreateCategory />
                    <LotList />
                    <CreateLot />
                    <ResultOfAuctionList />
                    <CreateResultOfAuction />
                    <UserList />
                    <CreateUser />
                    <h2>Auction Items</h2>
                    <ul>
                        {auctionItems.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <Login onLogin={handleLogin} />
                    {error && <ErrorDisplay error={error} />}
                </div>
            )}
        </div>
    );
}

export default App;

