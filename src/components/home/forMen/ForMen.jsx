import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './cards/Card';
import './ForMen.css';

const ForMen = () => {
    const [data, setData] = useState([]);

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

    return (
        <div className=''>
            <div className='container'>
                <div className='d-flex gap-4 align-items-center topDiv'>
                    <span className='span'></span>
                    <h2 className='title color'>Categories For Men</h2>
                </div>
                <div className='card-container'>
                    <div className='d-none d-lg-block'>
                        <div className='d-flex justify-content-between gap-3'>
                            {data
                                .slice(data.length - 4, data.length)
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
                    <div className='d-lg-none'>
                        <div className='d-flex justify-content-between gap-2'>
                            {data
                                .slice(data.length - 3, data.length)
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
                    <div className='d-none d-lg-block'>
                        <div className='d-flex justify-content-between mt-5 gap-3'>
                            {data
                                .slice(data.length - 8, data.length - 4)
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
                    <div className='d-lg-none'>
                        <div className='d-flex justify-content-between mt-5 gap-2'>
                            {data
                                .slice(data.length - 6, data.length - 3)
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
            </div>
        </div>
    );
};

export default ForMen;
