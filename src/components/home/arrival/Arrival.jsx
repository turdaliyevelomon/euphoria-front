import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import left from '../../images/Left.svg';
import right from '../../images/Right.svg';
import './Arrival.css';

const Arrival = () => {
    const [data, setData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);

    useEffect(() => {
        axios
            .get('http://localhost:3030/get-clothes')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Data fetch error:', error);
            });
    }, []);

    const handlePrevClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            setEndIndex(endIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (endIndex < data.length) {
            setStartIndex(startIndex + 1);
            setEndIndex(endIndex + 1);
        }
    };

    return (
        <div className='arrivals'>
            <div className='container'>
                <div className='d-flex gap-4 align-items-center topDiv'>
                    <span className='span'></span>
                    <h2 className='title color'>New Arrival</h2>
                </div>
                <div className='d-flex justify-content-between'>
                    <img src={left} alt='previous' onClick={handlePrevClick} />
                    <div className='card-container'>
                        <div className='d-none d-lg-block mx-lg-3'>
                            <div className='d-flex justify-content-between gap-4'>
                                {data
                                    .slice(startIndex, endIndex)
                                    .map((item) => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            img={`http://localhost:3030${item.images}`}
                                            id={item.id}
                                            category={item.category}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className='mx-3 d-lg-none'>
                            <div className='d-flex justify-content-between gap-3'>
                                {data
                                    .slice(startIndex, endIndex - 1)
                                    .map((item) => (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            img={`http://localhost:3030${item.images}`}
                                            id={item.id}
                                            category={item.category}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                    <img src={right} alt='next' onClick={handleNextClick} />
                </div>
            </div>
        </div>
    );
};

export default Arrival;
