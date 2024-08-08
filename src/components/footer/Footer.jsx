import React from 'react';
import './Footer.css';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import playmarket from '../images/playmarket.svg';
import phone from '../images/phone.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='p-0 row'>
                        <ul className='p-2 col-6 col-lg-3'>
                            <li>
                                <h4 className='titleTopFooter'>Need Help</h4>
                            </li>
                            <li className='itemTopFooter'>Contact Us</li>
                            <li className='itemTopFooter'>Track Order</li>
                            <li className='itemTopFooter'>Returns & Refunds</li>
                            <li className='itemTopFooter'>FAQ's</li>
                            <li className='itemTopFooter'>Career</li>
                        </ul>

                        <ul className='p-2 col-6 col-lg-3'>
                            <li>
                                <h4 className='titleTopFooter'>Company</h4>
                            </li>
                            <li className='itemTopFooter'>About Us</li>
                            <li className='itemTopFooter'>euphoria Blog</li>
                            <li className='itemTopFooter'>euphoriastan</li>
                            <li className='itemTopFooter'>Collaboration</li>
                            <li className='itemTopFooter'>Media</li>
                        </ul>

                        <ul className='p-2 col-6 col-lg-3'>
                            <li>
                                <h4 className='titleTopFooter'>More Info</h4>
                            </li>
                            <li className='itemTopFooter'>
                                Term and Conditions
                            </li>
                            <li className='itemTopFooter'>Privacy Policy</li>
                            <li className='itemTopFooter'>Shipping Policy</li>
                            <li className='itemTopFooter'>Sitemap</li>
                        </ul>

                        <ul className='p-2 col-6 col-lg-3'>
                            <li>
                                <h4 className='titleTopFooter'>Location</h4>
                            </li>
                            <li className='itemTopFooter'>
                                support@euphoria.in
                            </li>
                            <li className='itemTopFooter'>
                                Eklingpura Chouraha, Ahmedabad Main Road
                            </li>
                            <li className='itemTopFooter'>
                                (NH 8- Near Mahadev Hotel) Udaipur, India-
                                313002
                            </li>
                        </ul>
                    </div>

                    <div className='bottomFooter align-items-md-end'>
                        <ul className='p-0 d-flex mb-0'>
                            <Link to={'https://ru-ru.facebook.com/'}>
                                <li className='me-2 imgTopFooter'>
                                    <img src={facebook} alt='facebook' />
                                </li>
                            </Link>
                            <Link to={'https://www.instagram.com/'}>
                                <li className='me-2 imgTopFooter'>
                                    <img src={instagram} alt='instagram' />
                                </li>
                            </Link>
                            <Link to={'https://twitter.com/?lang=ru'}>
                                <li className='me-2 imgTopFooter'>
                                    <img src={twitter} alt='twitter' />
                                </li>
                            </Link>
                            <Link to={'https://www.linkedin.com/feed/'}>
                                <li className='imgTopFooter'>
                                    <p className='linkedIn mb-0'>in</p>
                                </li>
                            </Link>
                        </ul>
                        <div className='downloadFooter'>
                            <h4 className='titleBottomFooter mb-4'>
                                Download The App
                            </h4>
                            <div className='d-flex gap-5'>
                                <Link
                                    to={
                                        'https://play.google.com/store/apps?hl=ru&gl=US'
                                    }
                                >
                                    <div className='d-flex gap-3 divBottomFooter'>
                                        <img
                                            src={playmarket}
                                            alt='google play'
                                        />
                                        <div>
                                            <p className='textBottomFooter mb-0'>
                                                android app on
                                            </p>
                                            <h5 className='headingBottomFooter mb-0'>
                                                Google Play
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={'https://www.apple.com/app-store/'}>
                                    <div className='d-flex gap-3 divBottomFooter'>
                                        <img src={phone} alt='phone' />
                                        <div>
                                            <p className='textBottomFooter mb-0'>
                                                Available on the
                                            </p>
                                            <h5 className='headingBottomFooter mb-0'>
                                                App Store
                                            </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
