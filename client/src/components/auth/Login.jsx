import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css'

//Toast
import { authFailed } from '../Toast/Toast';

const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    // api login    
    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8080/api/login`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data);
        if (data.user) {
            localStorage.setItem('token', data.user)
            localStorage.setItem('name', data.name)
            navigate("/home")
        } else {
            console.log("failed")
            authFailed();
        }
    }

    return (
        <div className="innerContainer">
            <div className="detailsContainer">
                <div className='inner-inner'>
                    <h1 className='h1'>WELCOME BACK!</h1>
                    <form onSubmit={loginUser} className='form'>
                        <label for="email">Email:</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='input'
                            placeholder='Enter your email'
                            required
                            value={email}
                            onChange={e => setemail(e.target.value)}
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
                        <input
                            type='submit'
                            value='Login'
                            className='button'
                        />
                    </form>
                    <p className='p'>Don't have an account? <Link Link to="/signup" style={{ textDecoration: 'none', color: '#1a7fc1', fontStyle:'italic' }}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login