import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, img, id, category }) => {
    return (
        <div className='cardArrive'>
            <Link to={`/products/detail/${id}`}>
                <img src={img} alt={title} className='imgCard' />
            </Link>
            <h5 className='titleCard color'>{category}</h5>
        </div>
    );
};

export default Card;
