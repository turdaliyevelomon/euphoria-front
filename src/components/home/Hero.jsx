import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';

const Hero = () => {
    return (
        <div className='hero'>
            <Carousel className='w-100'>
                <Carousel.Item className='itemHero1'>
                    <div className='container'>
                        <div className='d-flex align-items-center justify-content-around divItemHero'>
                            <div>
                                <span className='spanItemHero'>T-shirt / Tops</span>
                                <h1 className='titleItemHero'>Summer Value Pack</h1>
                                <span className='spanItemHero'>cool / colorful / comfy</span>
                                <button className='buttonItemHero'>Shop Now</button>
                            </div>
                            <img src={hero1} alt='img' className='imgItemHero' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='itemHero2'>
                    <div className='container'>
                        <div className='d-flex align-items-center justify-content-around divItemHero'>
                            <div>
                                <span className='spanItemHero'>T-shirt / Tops</span>
                                <h1 className='titleItemHero'>Summer Value Pack</h1>
                                <span className='spanItemHero'>cool / colorful / comfy</span>
                                <button className='buttonItemHero'>Shop Now</button>
                            </div>
                            <img src={hero2} alt='img' className='imgItemHero' />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='itemHero3'>
                    <div className='container'>
                        <div className='d-flex align-items-center justify-content-around divItemHero'>
                            <div>
                                <span className='spanItemHero'>T-shirt / Tops</span>
                                <h1 className='titleItemHero'>Summer Value Pack</h1>
                                <span className='spanItemHero'>cool / colorful / comfy</span>
                                <button className='buttonItemHero'>Shop Now</button>
                            </div>
                            <img src={hero3} alt='img' className='imgItemHero' />
                        </div>
                    </div>
                </Carousel.Item>             
            </Carousel>
        </div>
    );
};

export default Hero;
