import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Wishlist.css';

const Wishlist = () => {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState(null);

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
                        const data = await response.json();
                        setUserId(data.userId);

                        axios
                            .get(
                                `http://localhost:3030/get-like-clothes/${data.userId}`
                            )
                            .then((response) => {
                                console.log(response.data.user.clothes.clothes);
                                setData(response.data.user.clothes.clothes);
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

    const handleUnlikeClick = async (itemId) => {
        try {
            await axios.post('http://localhost:3030/unsubscribe-like', {
                user_id: userId,
                clothes_id: itemId,
            });

            const updatedData = data.filter((item) => item.id !== itemId);
            setData(updatedData);
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    const handleAddToCart = async (itemId) => {
        try {
            const response = await axios.post(
                'http://localhost:3030/cart-clothes',
                {
                    user_id: userId,
                    clothes_id: itemId,
                }
            );

            if (response.status === 201) {
                alert('Mahsulotga cartga qo`shildi');
            }
        } catch (error) {
            if (
                error.response &&
                error.response.status === 400 &&
                error.response.data.error ===
                    'Bu mahsulotni allaqachon yoqtirganiz'
            ) {
                alert('Bu mahsulot allaqachon cartga qo`shilgan');
            } else {
                console.error('Xatolik yuz berdi:', error);
            }
        }
    };

    return (
        <div className='heart'>
            <Navbar />
            <div className='container'>
                <h2 className='titleWishlist'>Wishlist</h2>
                <ul className='wishlist'>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className='d-flex align-items-center justify-content-between itemWishlist'
                        >
                            <span
                                onClick={() => handleUnlikeClick(item.id)}
                                className='spanWishlistDelete color'
                            >
                                X
                            </span>
                            <div className='d-lg-flex justify-content-lg-between w-100 mx-5 align-items-lg-center divWishlist'>
                                <img
                                    src={`http://localhost:3030${item.images}`}
                                    alt={item.title}
                                    className='imgWishlist'
                                />
                                <p className='textWishlist color'>
                                    {item.category}
                                </p>
                                <span className='spanWishlist color'>
                                    {item.price}
                                </span>
                            </div>
                            <button
                                className='buttonWishlist'
                                onClick={() => handleAddToCart(item.id)}
                            >
                                Add to cart
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
