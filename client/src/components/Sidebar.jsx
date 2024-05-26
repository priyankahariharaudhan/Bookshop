import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate();
        return (
            <div className='outer'>
                <h2>BOOK STOP</h2>
                <div className='inner'>
                    <Link Link to="/home" className='link'><h3>Home</h3></Link>
                    <span className='line'></span>
                    <Link Link to="/addbook" className='link'><h3>Add book</h3></Link>
                    <span className='line'></span>
                    <Link Link to="/lendbook" className='link'><h3>Lend Book</h3></Link>
                    <span className='line'></span>
                    <Link Link to="/status" className='link'><h3>Status</h3></Link>
                    <span className='line'></span>
                <Link Link to="/return" className='link'><h3>Return Book</h3></Link>
                </div>

                <div className="bottom">
                    <h3  onClick={() => { localStorage.clear(); navigate("/login") }}>Logout <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="#fff" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" /></svg></h3>
                </div>
            </div>
        )
    }

    export default Sidebar