import React, { useState, useEffect } from 'react';
import like from '../../../images/like.svg';
import unlike from '../../../images/imagesLike.png'
import { Link } from 'react-router-dom';
import '../../ListWomen.css';

const Card = ({ title, img, id, category }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
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

    const handleLikeClick = async () => {
        try {
            if (token && userId) {
                const response = await fetch(
                    'http://localhost:3030/like-clothes',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            user_id: userId,
                            clothes_id: id,
                        }),
                    }
                );

                if (response.ok) {
                    setIsLiked(true);
                } else {
                    console.error('Like xatosi');
                }
            }
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    const handleUnlikeClick = async () => {
        try {
            if (token && userId) {
                const response = await fetch(
                    'http://localhost:3030/unsubscribe-like',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            user_id: userId,
                            clothes_id: id,
                        }),
                    }
                );

                if (response.ok) {
                    setIsLiked(false);
                } else {
                    console.error('Unlike xatosi');
                }
            }
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    return (
        <div className='cardWomenList'>
            <Link to={`/products/detail/${id}`}>
                <div>
                    <img src={img} alt={title} className='imgCardWomenList' />
                    <div className='d-flex justify-content-between mt-3'>
                        <div className='divCardWomenList'>
                            <h5 className='titleCardWomenList color'>{title}</h5>
                            <p className='textCardWomenList color'>{category}</p>
                        </div>
                    </div>
                </div>
            </Link>
            {isLiked ? (
                <img
                    src={unlike}
                    alt='unlike'
                    className='like'
                    onClick={handleUnlikeClick}
                />
            ) : (
                <img
                    src={like}
                    alt='like'
                    className='like'
                    onClick={handleLikeClick}
                />
            )}
        </div>
    );
};

export default Card;
