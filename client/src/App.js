import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import LandingPage from './components/Landingpage';
import { Routes, Route, } from 'react-router-dom';


function App() {

  return (
        <div className='flex flex-col h-screen'>

          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={<Homepage/>}/>
          </Routes>
   
        </div>
  );
}

export default App;
