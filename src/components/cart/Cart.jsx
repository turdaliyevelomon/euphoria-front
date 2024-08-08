
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import deletecon from '../images/deletecon.svg';
import './Cart.css';

const Cart = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(null);
    const [numberMap, setNumberMap] = useState({});

    const incrementNumber = (itemId) => {
        const updatedNumberMap = { ...numberMap };
        updatedNumberMap[itemId] = (updatedNumberMap[itemId] || 0) + 1;
        setNumberMap(updatedNumberMap);
    };

    const decrementNumber = (itemId) => {
        if (numberMap[itemId] > 1) {
            const updatedNumberMap = { ...numberMap };
            updatedNumberMap[itemId] -= 1;
            setNumberMap(updatedNumberMap);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            (async () => {
                try {
                    const response = await fetch(
                        'http://localhost:3030/get-user-id',
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${storedToken}`,
                            },
                        }
                    );

                    if (response.ok) {
                        const userData = await response.json();
                        setUserId(userData.userId);

                        axios
                            .get(
                                `http://localhost:3030/get-cart-clothes/${userData.userId}`
                            )
                            .then((response) => {
                                const clothesData =
                                    response.data.user.clothes.clothes;
                                const initialNumberMap = {};
                                clothesData.forEach((item) => {
                                    initialNumberMap[item.id] = 1;
                                });
                                setNumberMap(initialNumberMap);
                                setData(clothesData);
                            })
                            .catch((error) => {
                                console.log(error.message);
                            });
                    } else {
                        console.error(
                            'Foydalanuvchi ma`lumotlarini olishda xatolik yuz berdi'
                        );
                    }
                } catch (error) {
                    console.error('Xatolik yuz berdi:', error);
                }
            })();
        }
    }, []);

    const handleUncartClick = async (itemId) => {
        try {
            await axios.post('http://localhost:3030/unsubscribe-cart', {
                user_id: userId,
                clothes_id: itemId,
            });

            const updatedData = data.filter((item) => item.id !== itemId);
            setData(updatedData);

            const updatedNumberMap = { ...numberMap };
            delete updatedNumberMap[itemId];
            setNumberMap(updatedNumberMap);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    const handleCheckoutClick = async (itemId) => {
        const cartItems = [];
        for (const item of data) {
            cartItems.push({
                clothes_id: item.id,
                number: numberMap[item.id] || 1,
            });
        }

        try {
            cartItems.map(async (cartItem) => {
                const response = axios.post(
                    'http://localhost:3030/create-usersShop',
                    {
                        user_id: userId,
                        clothes_id: cartItem.clothes_id,
                        number: cartItem.number,
                    }
                );

                await axios.post('http://localhost:3030/unsubscribe-cart', {
                    user_id: userId,
                    clothes_id: cartItem.clothes_id,
                });

                const updatedData = data.filter((item) => item.id !== cartItem.clothes_id);
                setData(updatedData);
                const updatedNumberMap = { ...numberMap };
                delete updatedNumberMap[cartItem.clothes_id];
                setNumberMap(updatedNumberMap);
                return response;
            });
            alert('Buyurtma qabul qilindi');
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    return (
        <div className='carts'>
            <Navbar />
            <div className='container'>
                <h2 className='titleCart color'>Cart</h2>
                <ul className='cart'>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className='d-flex align-items-center justify-content-between itemCart'
                        >
                            <img
                                src={`http://localhost:3030${item.images}`}
                                alt={item.title}
                                className='imgCart'
                            />
                            <p className='textCart color'>{item.category}</p>
                            <span className='spanCart color'>{item.price}</span>
                            <div className='d-flex align-items-center justify-content-center divBtnCart'>
                                <button
                                    onClick={() => decrementNumber(item.id)}
                                    className='buttonCart'
                                >
                                    -
                                </button>
                                <span className='spanBtnCart'>
                                    {numberMap[item.id]}
                                </span>
                                <button
                                    onClick={() => incrementNumber(item.id)}
                                    className='buttonCart'
                                >
                                    +
                                </button>
                            </div>
                            <span>{numberMap[item.id] * item.price}</span>
                            <img
                                src={deletecon}
                                alt='delete'
                                onClick={() => handleUncartClick(item.id)}
                                className='deleteCart'
                            />
                        </li>
                    ))}
                </ul>
                <button
                    className='checkButtonCart'
                    onClick={handleCheckoutClick}
                >
                    Checkout
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
