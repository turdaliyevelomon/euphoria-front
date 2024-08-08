import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [shouldRedirect, setShouldRedirect] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3030/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;

                localStorage.setItem('token', token);

                setIsLoggedIn(true);
                setShouldRedirect(true);
            } else {
                console.error('Kirish xatosi');
            }
        } catch (error) {
            console.error('Xatolik yuz berdi:', error);
        }
    };

    useEffect(() => {
        if (shouldRedirect) {
            setIsLoggedIn(true);
        }
    }, [shouldRedirect, setIsLoggedIn]);

    return (
        <div className='authContainer'>
            <div className='container'>
                <div className='auth'>
                    <h2 className='titleAuth'>Kirish</h2>
                    <form className='formAuth'>
                        <div className='fromAuthDiv'>
                            <label className='formAuthLabel'>Email:</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                className='fromAuthInput'
                            />
                        </div>
                        <div className='fromAuthDiv'>
                            <label className='formAuthLabel'>Parol:</label>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className='fromAuthInput'
                            />
                        </div>
                        <button
                            type='button'
                            onClick={handleLogin}
                            className='buttonAuth'
                        >
                            Kirish
                        </button>
                    </form>
                    <Link to={'/register'}>
                        <p>Register</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
