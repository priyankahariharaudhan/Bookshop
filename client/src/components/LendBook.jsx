import React, { useState } from 'react'
import '../assets/css/LendBook.css'
import moment from 'moment/moment';
import { lendBook } from './Api';

//components
import Sidebar from './Sidebar';

//toast
import { updated } from './Toast/Toast';

const LendBook = () => {
    const [LLbname, setLLbname] = useState('');
    const [LLauthor, setLLauthor] = useState('');
    const [LLpublisher, setLLpublisher] = useState('');
    const [LLyear, setLLyear] = useState('');
    const [LLsname, setLLsname] = useState('');
    const [LLsid, setLLsid] = useState('');
    const [LLdate, setLLdate] = useState('');
    const [LLrdate, setLLrdate] = useState('');

    const toast = (e) => {
        e.preventDefault();
        lendBook(LLbname, LLauthor, LLpublisher, LLyear, LLsname, LLsid, LLdate, LLrdate);
        updated();
        setLLbname('');
        setLLauthor('');
        setLLpublisher('');
        setLLyear('');
        setLLsname('');
        setLLsid('');
        setLLdate('');
        setLLrdate('');
    }


    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="lendbook">
                <div className="pagename">
                    <h3 className='hh3'>Lend Book</h3>
                </div>
                <div className="innerContainer">
                    <div className="detailsContainer">
                        <div className='inner-inner'>
                            <form onSubmit={toast} className='form'>
                                <h3 className='sideTopic'>Book Details</h3>
                                <div className="separator">
                                    <div className="separator1">
                                        <div className="separator2">
                                            <label for="LLbname">Book Name:</label>
                                            <input
                                                type='text'
                                                name='LLbname'
                                                id='LLbname'
                                                className='input'
                                                placeholder='Enter Book name'
                                                required
                                                value={LLbname}
                                                onChange={e => setLLbname(e.target.value)}
                                            />
                                        </div>
                                        <div className="separator2">
                                            <label for="LLauthor">Author Name:</label>
                                            <input
                                                type='text'
                                                name='LLauthor'
                                                id='LLauthor'
                                                className='input'
                                                placeholder='Enter Author name'
                                                required
                                                value={LLauthor}
                                                onChange={e => setLLauthor(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="separator1">
                                        <div className="separator2">
                                            <label for="LLpublisher">Publisher name:</label>
                                            <input
                                                type='text'
                                                name='LLpublisher'
                                                id='LLpublisher'
                                                className='input'
                                                placeholder='Enter Publisher name'
                                                required
                                                value={LLpublisher}
                                                onChange={e => setLLpublisher(e.target.value)}
                                            />
                                        </div>
                                        <div className="separator2">
                                            <label for="LLyear">Published Year:</label>
                                            <input
                                                type='number'
                                                name='LLyear'
                                                id='LLyear'
                                                className='input'
                                                placeholder='Enter Published year'
                                                required
                                                value={LLyear}
                                                onChange={e => setLLyear(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h3 className='sideTopic'>Student Details</h3>
                                <div className="separator1">
                                    <div className="separator2">
                                        <label for="LLsname">Student name:</label>
                                        <input
                                            type='text'
                                            name='LLsname'
                                            id='LLsname'
                                            className='input'
                                            placeholder='Enter Student name'
                                            required
                                            value={LLsname}
                                            onChange={e => setLLsname(e.target.value)}
                                        />
                                    </div>
                                    <div className="separator2">
                                        <label for="LLsid">Student id:</label>
                                        <input
                                            type='text'
                                            name='LLsid'
                                            id='LLsid'
                                            className='input'
                                            placeholder='Enter Student id'
                                            required
                                            value={LLsid}
                                            onChange={e => setLLsid(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <h3 className='sideTopic'>Date Details</h3>
                                <div className="separator1">
                                    <div className="separator2">
                                        <label for="LLdate">Published Date:</label>
                                        <input
                                            type='date'
                                            name='LLdate'
                                            id='LLdate'
                                            className='input'
                                            placeholder='Enter Published Date'
                                            required
                                            value={LLdate}
                                            onChange={e => { setLLdate(e.target.value); setLLrdate(''); }}
                                        />
                                    </div>
                                    <div className="separator2">
                                        <label for="LLrdate">Due Date:</label>
                                        <input
                                            type='date'
                                            name='LLrdate'
                                            id='LLrdate'
                                            className='input'
                                            placeholder='Enter Due date'
                                            required
                                            value={LLrdate}
                                            min={moment(LLdate).add(1, 'days').format('YYYY-MM-DD')}
                                            onChange={e => setLLrdate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {/* {show ? <p>All the fields are required</p> : null} */}
                                <input
                                    type='submit'
                                    value='Submit'
                                    className='buttonl'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LendBook