import React from 'react';
import './App.css';
// import Nav from './components/Nav'
// import Postcard from './components/Postcard';
// import Footer from './components/Footer';
// import Postform from './components/Postform';
import Test from './pages/Test'
import LandingPage from './components/Landingpage';
import { Routes, Route, } from 'react-router-dom';


function App() {

  return (
        <div className='flex flex-col h-screen'>
      
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={<Test/>}/>
          </Routes>
   
        </div>
  );
}

export default App;
