import React, { useState,useEffect } from 'react';
import Fab from '@mui/material/Fab';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import TablePagination, {
    tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import '../assets/css/Status.css'

//components
import Sidebar from './Sidebar';

//api
import { getAllBook } from './Api';

const Status = () => {

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [library, setLibrary] = useState([]);

    const filteredBooks = library.filter(items =>
        (items.bookName != null && items.bookName.toLowerCase().includes(search.toLowerCase())) ||
        (items.authorName != null && items.authorName.toLowerCase().includes(search.toLowerCase())) ||
        (items.genre != null && items.genre.toLowerCase().includes(search.toLowerCase())) ||
        (items.publishedYear != null && items.publishedYear.toString().toLowerCase().includes(search.toString().toLowerCase()))
    );

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredBooks.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const blue = {
        400: '#3399FF',
    };

    const grey = {
        0: '#ffffff',
        10: '#343434',
        20: '#272727',
    };

    const Root = styled('div')(
        ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    text-align: left;
    padding: 15px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[10]};
  }
  `,
    );

    const CustomTablePagination = styled(TablePagination)(
        ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[10] : grey[10]};
    border-radius: 50px;
    background-color: transparent;
    color:${theme.palette.mode === 'dark' ? grey[0] : grey[0]};

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    }

    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[400]};
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    color:${theme.palette.mode === 'dark' ? grey[0] : grey[0]};

    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[20] : grey[20]};
    }

    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[400]};
    }
  }
  `,
    );

    useEffect(() => {
        getAllBook()
            .then((res) => {
                setLibrary(res.data.books);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <div>
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="status">
                <div className="pagename">
                    <h3 className='hh3'>Status</h3>
                </div>

                <div className="search">
                    <form className='.sform'>
                        <SearchIcon fontSize='medium' color='#fff' className='searchicon' />
                        <input
                            type='text'
                            name='search'
                            className='searchinput'
                            placeholder='Search by book, author, genre, published year'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>

                <div className="table">
                    {/* table pagination */}
                    <Root sx={{ width: '100%', maxWidth: '100%' }}>
                        <table aria-label="custom pagination table">
                            <thead>
                                <tr>
                                    <th>BOOK NAME</th>
                                    <th>AUTHOR NAME</th>
                                    <th>PUBLISHER NAME</th>
                                    <th>PUBLISHED YEAR</th>
                                    <th>GENRE</th>
                                    <th>TOTAL COUNT</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(rowsPerPage > 0
                                    ? filteredBooks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : filteredBooks
                                ).map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.bookName}</td>
                                        <td style={{ width: 120 }} align="right">
                                            {row.authorName}
                                        </td>
                                        <td style={{ width: 130 }} align="right">
                                            {row.publisherName}
                                        </td>
                                        <td style={{ width: 130 }} align="right">
                                            {row.publishedYear}
                                        </td>
                                        <td style={{ width: 150 }} align="right">
                                            {row.genre}
                                        </td>
                                        <td style={{ width: 120 }} align="right">
                                            {row.count}
                                        </td>
                                        <td style={{ width: 150 }} align="right">
                                            {row.status ? (<Fab variant="extended" size="small" color="success" aria-label="add" sx={{ fontSize: 'x-small' }}>
                                                <FiberManualRecordIcon sx={{ mr: 0.5, fontSize: 'medium' }} />
                                                Available
                                            </Fab>) : (<Fab variant="extended" size="small" color="error" aria-label="add" sx={{ fontSize: 'x-small' }}  >
                                                <FiberManualRecordIcon sx={{ mr: 0.5, fontSize: 'medium' }} />
                                                Not Available
                                            </Fab>)}
                                        </td>
                                    </tr>
                                ))}

                                {emptyRows > 0 && (
                                    <tr style={{ height: 34 * emptyRows }}>
                                        <td colSpan={3} />
                                    </tr>
                                )}
                            </tbody>
                            
                            <tfoot>
                                <tr>
                                    <CustomTablePagination
                                        rowsPerPageOptions={[10, 20, 30, { label: 'All', value: -1 }]}
                                        colSpan={7}
                                        count={filteredBooks.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                'aria-label': 'rows per page',
                                            },
                                            actions: {
                                                showFirstButton: true,
                                                showLastButton: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </tr>
                            </tfoot>
                        </table>
                    </Root>
                </div>
            </div>
        </div>
    )
}

export default Status