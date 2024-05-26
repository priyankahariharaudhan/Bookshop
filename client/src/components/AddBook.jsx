import React, { useState } from 'react'
import '../assets/css/AddBook.css'

//components
import Sidebar from './Sidebar';
import { createBook } from './Api';

//toast
import { bookAdded } from './Toast/Toast';

const AddBook = () => {
    const [AAbname, setAAbname] = useState('');
    const [AAauthor, setAAauthor] = useState('');
    const [AApublisher, setAApublisher] = useState('');
    const [AAyear, setAAyear] = useState('');
    const [AAgenre, setAAgenre] = useState('');
    const [AAcount, setAAcount] = useState('');

    const toast = (e) => {
        e.preventDefault();
        createBook(AAbname,AAauthor,AApublisher,AAyear,AAgenre,AAcount)
        bookAdded();
        setAAbname('');
        setAAauthor('');
        setAApublisher('');
        setAAyear('');
        setAAgenre('');
        setAAcount('');
    }

    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="addbook">
                <div className="pagename">
                    <h3 className='hh3'>Add book</h3>
                </div>

                <div className="innerContainerA">
                    <div className="detailsContainerA">
                        <div className='inner-inner'>
                            <form onSubmit={toast} className='form'>
                                <h3 className='sideTopic'>Book Details</h3>
                                <div className="separator">
                                    <div className="separator1">
                                        <div className="separator2">
                                            <label for="AAbname">Book Name:</label>
                                            <input
                                                type='text'
                                                name='AAbname'
                                                id='AAbname'
                                                className='input'
                                                placeholder='Enter Book name'
                                                required
                                                value={AAbname}
                                                onChange={e => setAAbname(e.target.value)}
                                            />
                                        </div>
                                        
                                        <div className="separator2">
                                            <label for="AAauthor">Author Name:</label>
                                            <input
                                                type='text'
                                                name='AAauthor'
                                                id='AAauthor'
                                                className='input'
                                                placeholder='Enter Author name'
                                                required
                                                value={AAauthor}
                                                onChange={e => setAAauthor(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="separator1">
                                        <div className="separator2">
                                            <label for="AApublisher">Publisher name:</label>
                                            <input
                                                type='text'
                                                name='AApublisher'
                                                id='AApublisher'
                                                className='input'
                                                placeholder='Enter Publisher name'
                                                required
                                                value={AApublisher}
                                                onChange={e => setAApublisher(e.target.value)}
                                            />
                                        </div>

                                        <div className="separator2">
                                            <label for="AAyear">Published Year:</label>
                                            <input
                                                type='number'
                                                name='AAyear'
                                                id='AAyear'
                                                className='input'
                                                placeholder='Enter Published year'
                                                required
                                                value={AAyear}
                                                onChange={e => setAAyear(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="separator1">
                                    <div className="separator2">
                                            <label for="AAcount">Genre:</label>
                                            <input
                                                type='text'
                                                name='AAcount'
                                                id='AAcount'
                                                className='input'
                                                placeholder='Enter genre'
                                                required
                                                value={AAgenre}
                                                onChange={e => setAAgenre(e.target.value)}
                                            />
                                        </div>

                                        <div className="separator2">
                                            <label for="AAcount">Books Count:</label>
                                            <input
                                                type='text'
                                                name='AAcount'
                                                id='AAcount'
                                                className='input'
                                                placeholder='Enter Books Count'
                                                required
                                                value={AAcount}
                                                onChange={e => setAAcount(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* {show ? <p>All the fields are required</p> : null} */}
                                <input
                                    type='submit'
                                    value='Submit'
                                    className='buttona'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook