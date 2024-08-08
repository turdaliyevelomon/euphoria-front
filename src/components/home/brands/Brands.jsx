import React from 'react';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';
import { Link } from 'react-router-dom';
import './Brands.css';

const Brands = () => {
    return (
        <div className='container'>
            <div className='brands'>
                <h2 className='titleBrands'>Top Brands Deal</h2>
                <p className='textBrands'>
                    Up To <span className='spanBrands'>60%</span> off on brands
                </p>
                <div className='d-flex align-items-center justify-content-between gap-1'>
                    <Link to={'https://www.nike.com/'}>
                        <div className='brandDivImg'>
                            <img src={img1} alt='' className='brandImg' />
                        </div>
                    </Link>
                    <Link to={'https://www.hm.com/entrance.ahtml?orguri=%2F'}>
                        <div className='brandDivImg'>
                            <img src={img2} alt='' className='brandImg' />
                        </div>
                    </Link>
                    <Link to={'https://www.levi.com/US/en_US/'}>
                        <div className='brandDivImg'>
                            <img src={img3} alt='' className='brandImg' />
                        </div>
                    </Link>
                    <Link to={'https://uspoloassn.com/'}>
                        <div className='brandDivImg'>
                            <img src={img4} alt='' className='brandImg' />
                        </div>
                    </Link>
                    <Link to={'https://us.puma.com/us/en'}>
                        <div className='brandDivImg'>
                            <img src={img5} alt='' className='brandImg' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Brands;
