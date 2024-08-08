import React, { useState, useEffect } from 'react';
import shopping from '../../images/shopping.svg';
import axios from 'axios';

const Card = ({ title, img, id, category, price }) => {

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

    const handleAddToCart = async () => {
        try {
            const response = await axios.post(
                'http://localhost:3030/cart-clothes',
                {
                    user_id: userId, 
                    clothes_id: id,
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
        <div className='gap-5 p-5 cardProductDetail'>
            <div className='imgDivProductDetail'>
                <img src={img} alt={title} className='imgProductDetail' />
            </div>
            <div className='cardDivProductDetail'>
                <h5 className='titleProductDetail color'>{title}</h5>
                <span className='spanProductDetail color'>{category}</span>
                <div className='d-flex gap-4'>
                    <div
                        className='d-flex align-items-center justify-content-center gap-2 cartProductDetail'
                        onClick={handleAddToCart}
                    >
                        <img src={shopping} alt='shopping' />
                        <span className='spanCartProductDetail'>
                            Add to cart
                        </span>
                    </div>
                    <button className='buttonProductDetail'>{price}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
