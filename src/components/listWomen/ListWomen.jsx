import React from 'react';
import Pagination from './pagination/Pagination';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './ListWomen.css';

const ListWomen = () => {

    return (
        <div className='women'>
            <Navbar />
            <div className='container'>
                <div>
                    <h3 className='titleListWomen color'>Women’s Clothing</h3>
                    <Pagination />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ListWomen;
