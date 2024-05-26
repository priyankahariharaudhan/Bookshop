import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show] = useState(false);

    //api signup
    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch(`https://bookshop-2iww.onrender.com/api/signup`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);

        if (data.status === "ok") {
            navigate("/login")
        }
    }

    return (
        <div>
            <div className="innerContainer">
                <div className="detailsContainer">
                    <div className='inner-inner'>
                        <h1 className='h1'>CREATE ACCOUNT</h1>
                        <form onSubmit={registerUser} className='form'>
                            <label for="name">Name:</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                className='input'
                                placeholder='Enter your name'
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <label for="email">Email:</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='input'
                                placeholder='Enter your email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <label for="pwd">Password:</label>
                            <input
                                type='password'
                                name='pwd'
                                id='pwd'
                                className='input'
                                placeholder='Enter your Password'
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            {show ? <p style={{ cursor:"pointer", color: 'red', fontStyle: 'italic', marginLeft: '10px' }}>All the fields are required</p> : null}
                            <input
                                type='submit'
                                value='Sign Up'
                                className='button'
                            />
                        </form>
                        <p className='p'>Already have an account? <Link Link to="/login" style={{ textDecoration: 'none', color: '#1a7fc1', fontStyle: 'italic' }}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn