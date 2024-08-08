//Cartausel
import React from 'react';
import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts
const Arrival = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) =>
                console.error(
                    "API dan ma'lumot olishda xatolik yuz berdi: ",
                    error
                )
            );
    }, []);

    const handleSelect = (selectedIndex) => {
        setCurrentIndex(selectedIndex);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    console.log(data);
    return (
        <div>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                {data.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                            src={item.img}
                            alt={item.title}
                            className='d-block w-100'
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Arrival;
///////////////////////////////////////////////////////////////////////////////////////////////////