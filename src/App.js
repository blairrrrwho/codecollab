import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Postform from './components/Postform';


function App() {
  const [currentTab, handleTabChange] = useState('About');

  useEffect(() => {
    document.title = `Code Collab | ${currentTab}`;
  }, [currentTab]);

  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    } else if (currentTab === "Postform")
    return <Postform />
  };

  return (
    <>
    <Nav currentTab={currentTab}
    handleTabChange={handleTabChange} />
    <main>{renderTab()}</main>
    <div className='bg-yellow-800 w-full h-screen'>
      <Postform />
    </div>
      <Footer></Footer>
    </>
  );
}

export default App;
