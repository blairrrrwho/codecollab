import React from 'react';
import './App.css';
// import Nav from './components/Nav'
// import Postcard from './components/Postcard';
// import Footer from './components/Footer';
// import Postform from './components/Postform';
import Home from './pages/Home'
import LandingPageIdeally from './components/Landingpageideally';
import { Routes, Route, } from 'react-router-dom';


function App() {

  return (
        <div className='flex flex-col h-screen'>
      
          <Routes>
            <Route path='/' element={<LandingPageIdeally/>} />
            <Route path='/home' element={<Home/>}/>
          </Routes>
   
        </div>
  );
}

export default App;
