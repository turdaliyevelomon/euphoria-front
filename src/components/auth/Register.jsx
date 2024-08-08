// Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

function Register({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3030/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                console.error("Ro'yxatdan o'tish xatosi");
            }
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    return (
        <div className='authContainer'>
            <div className='container'>
                <div className='auth'>
                    <h2 className='titleAuth'>Ro'yxatdan o'tish</h2>
                    <form className='formAuth'>
                        <div className='formAuthDiv'>
                            <label className='formAuthLabel'>Foydalanuvchi nomi:</label>
                            <input
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleInputChange}
                                className='fromAuthInput'
                            />
                        </div>
                        <div className='formAuthDiv'>
                            <label className='formAuthLabel'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='fromAuthInput'
                            />
                        </div>
                        <div className='formAuthDiv'>
                            <label className='formAuthLabel'>Parol:</label>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className='fromAuthInput'
                            />
                        </div>
                        <button type='button' onClick={handleRegister} className='buttonAuth'>
                            Ro'yxatdan o'tish
                        </button>
                    </form>
                    <Link to={'/login'}>
                        <p>Login</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
