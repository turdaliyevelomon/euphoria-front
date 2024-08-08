import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './cards/Card';
import { Row, Col } from 'react-bootstrap';

const API_URL = 'http://localhost:3030/get-clothes'; 
const ITEMS_PER_PAGE = 12; 

function Pagination() {
    const [menData, setMenData] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
 
    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => {
                setLoading(false);
                const maleData = response.data.filter(
                    (item) => item.gender === 'male'
                );
                setMenData(maleData);
                // setData(response.data);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = menData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='container mt-4'>
            <Row className='row'>
                {currentItems.map((item, index) => (
                    <Col lg={3} md={4} sm={6} className='col'>
                        <Card
                            key={index}
                            title={item.title}
                            img={`http://localhost:3030${item.images}`}
                            id={item.id}
                            category={item.category}
                        />
                    </Col>
                ))}
            </Row>

            <nav className='d-flex justify-content-center align-items-center'>
                <ul className='pagination'>
                    {Array.from(
                        { length: Math.ceil(menData.length / ITEMS_PER_PAGE) },
                        (_, index) => (
                            <li
                                key={index}
                                className={`page-item ${
                                    currentPage === index + 1 ? 'active' : ''
                                }`}
                            >
                                <a
                                    href='#!'
                                    className='page-link'
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </a>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
