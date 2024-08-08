import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './cards/Card';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const API_URL = `http://localhost:3030/get-clothes/${id}`; 

    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [API_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    img={`http://localhost:3030${data.images}`}
                    category={data.category}
                    price={data.price}
                />
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
