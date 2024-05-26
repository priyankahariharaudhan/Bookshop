 import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

//components
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/Home';
import AddBook from './components/AddBook';
import LendBook from './components/LendBook';
import Status from './components/Status';
import Return from './components/Return';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/lendbook' element={<LendBook />} />
        <Route path='/status' element={<Status />} />
        <Route path='/return' element={<Return/>}/>
      </Routes>

      {/* Toast  */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
      
    </div>
  );
}

export default App;
