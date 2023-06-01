import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Postform from './components/Postform';
import About from './components/About'
// import SignUp from './components/SignUp';
// import Login from './components/Login';


export default function App() {
  const [currentTab, handleTabChange] = useState("Home");

  useEffect(() => {
    document.title = `Aaron Dreyer | ${currentTab}`;
  }, [currentTab]);

  const renderTab = () => {
    if (currentTab === "Home") {
      return <Postform />;
    }
    if (currentTab === "About") {
      return <About />;
    }
    return <Postform />;
  };

  return (
    <>
    <div className='App'>
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main className='container mx-auto py-6'>{renderTab()}</main>
      <Footer></Footer>
    </div>
    </>
  );
}