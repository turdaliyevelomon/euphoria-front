import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Orders.css';

const Orders = () => {
    const [arr, setArr] = useState([]);

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

                        axios
                            .get(
                                `http://localhost:3030/get-usersShop/${userData.userId}`
                            )
                            .then((response) => {
                                const clothesData =
                                    response.data.user.clothes.clothes;
                                const initialArr = [];

                                clothesData.forEach((item) => {
                                    const existingItem = initialArr.find(
                                        (a) => a.id === item.id
                                    );

                                    if (existingItem) {
                                        existingItem.number += item.number;
                                    } else {
                                        initialArr.push({
                                            ...item,
                                            number: item.number,
                                        });
                                    }
                                });

                                setArr(initialArr);
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

    return (
        <div className='user'>
            <Navbar />
            <div className='container'>
                <h2 className='titleOrders'>My Orders</h2>
                <ul className='orders'>
                    {arr.map((item, index) => (
                        <li
                            key={index}
                            className='d-flex align-items-center gap-5 itemCart'
                        >
                            <img
                                src={`http://localhost:3030${item.images}`}
                                alt={item.title}
                                className='imgOrders'
                            />
                            <div>
                                <p className='textCart color'>{item.category}</p>
                                <p>{item.title}</p>
                                <span className='spanCart color'>{`${item.price} x ${
                                    item.number
                                } = ${item.price * item.number}`}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Orders;
