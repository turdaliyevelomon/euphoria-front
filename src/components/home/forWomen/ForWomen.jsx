import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './cards/Card';
import '../forMen/ForMen.css';

const ForWomen = () => {
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
                    <h2 className='title color'>Categories For Women</h2>
                </div>
                <div className='card-container'>
                    <div className='d-none d-lg-block'>
                        <div className='d-flex justify-content-between gap-3'>
                            {data.slice(0, 4).map((item) => (
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
                            {data.slice(0, 3).map((item) => (
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

export default ForWomen;
