import React from 'react';
import Pagination from './pagination/Pagination';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import '../listWomen/ListWomen.css';

const ListMen = () => {
    return (
        <div className='men'>
            <Navbar />
            <div className='container'>
                <h3 className='titleListWomen color'>Men’s Clothing</h3>
                <Pagination />
            </div>
            <Footer />
        </div>
    );
};

export default ListMen;
