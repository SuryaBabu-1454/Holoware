import React from 'react'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <ToastContainer />
    <NavBar />
      <Routes>
  
     <Route path='/' element={<Home />} />

      </Routes>


    </div>
  )
}

export default App