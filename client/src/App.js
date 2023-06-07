import React, { useState } from 'react';
import './App.css';
// import Nav from './components/Nav'
// import Postcard from './components/Postcard';
// import Footer from './components/Footer';
// import Postform from './components/Postform';
import Test from './pages/Test'
import LandingPage from './components/Landingpage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost'


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex flex-col h-screen'>
          <Routes>
            <Route
              path='/'
              element={isLoggedIn ? <Navigate to='/test' /> : <LandingPage onLogin={handleLogin} />}
            />
            <Route path='/test' element={<Test onLogout={handleLogout} />} />
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
