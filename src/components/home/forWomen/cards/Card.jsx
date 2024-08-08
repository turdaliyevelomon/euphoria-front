import React from 'react';
import { Link } from 'react-router-dom';
import imgStrelka from '../../../images/strelka.svg'

const Card = ({ title, img, id, category }) => {
    return (
        <div className='cardMen'>
            <img src={img} alt={title} className='cardImg' />
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h5 className='cardMenTitle color'>{category}</h5>
                    <span className='cardMenSpan color'>Explore Now!</span>
                </div>
                <Link to={`/products/detail/${id}`}>
                    <img src={imgStrelka} alt="all img strelka" className='' />
                </Link>
            </div>
        </div>
    );
};

export default Card;
