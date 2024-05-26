import React from 'react'
import '../assets/css/Home.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


//api
import { decode, getAllBook, getLendBook } from './Api'

//components
import Sidebar from './Sidebar';

const Home = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([])
    const [lendBooks, setLendBooks] = useState([]);

    const totCount = books.length;
    console.log("total Couunt", totCount);

    const filterAvailableBooks = books.filter(items =>
        (items.status === true)
    );

    const AvailableCount = filterAvailableBooks.length;
    console.log("total Couunt", AvailableCount);

    const lendCount = lendBooks.length;
    // const currentDate = moment().format('DD-MM-YYYY');

    // const filterLendDate = lendBooks.filter(items =>
    //     (items.dueDate != null && (moment().isAfter(moment((items.dueDate).split('T')[0]).format('DD-MM-YYYY'))))
    // );
    // console.log("filter: ", filterLendDate.length);

    //verify user
    const token = localStorage.getItem('token')
    console.log("home token", token)
    if (token) {
        const user = decode(token)

        if (!user) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }

    useEffect(() => {
        getAllBook()
            .then((res) => {
                setBooks(res.data.books);
            })
            .catch((err) => {
                console.log(err);
            });

        getLendBook()
            .then((res) => {
                setLendBooks(res.data.books);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="home">
                <div className="pagename">
                    <h3 className='hh3'>Home</h3>
                </div>
                <div className="count">
                    <div className="card">
                        <p className='cardTitle'>Total Books</p>
                        <p className='cardCounnt'>{totCount}</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Available Books</p>
                        <p className='cardCounnt'>{AvailableCount}</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Lended Books</p>
                        <p className='cardCounnt'>{lendCount}</p>
                    </div>
                    <div className="card">
                        <p className='cardTitle'>Due Books</p>
                        <p className='cardCounnt'>{lendCount}</p>
                    </div>
                </div>
                <span className='between'></span>
                <div className="detailsContainerr">
                    <div className="details">
                        <div className="detailCard">
                            <p className='detailTitle'>New Arrivals</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>Harry Potter</li>
                                <li>Ponniyin Selvan</li>
                                <li>Chanakayas chant</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Fast Moving Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Silent Patient</li>
                                <li>The Girl on the Train</li>
                                <li>Gone Girl</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Frequently Lending Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Catcher in the Rye </li>
                                <li>To kill a Mockingbird</li>
                                <li>Ponniyin Selvan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="details">
                        <div className="detailCard">
                            <p className='detailTitle'>Famous Books</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>The Great Gatsby </li>
                                <li>Ponniyin Selvan</li>
                                <li>War and Peace</li>
                            </ul>
                        </div>
                        <div className="detailCard">
                            <p className='detailTitle'>Famous Author</p>
                            <span className='detailLine'></span>
                            <ul className='list'>
                                <li>Ernest Hemingway </li>
                                <li>J. K. Rowling</li>
                                <li>Leo Tolstoy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home