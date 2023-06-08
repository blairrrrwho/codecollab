import React from 'react';
import Nav from '../pages/Nav';
import Postform from '../pages/Postform';
import Postcard from '../pages/Postcard';
import Footer from '../pages/Footer';


export default function Homepage() {

  return (
        <div>
          <Nav />
          <Postform />
          <Postcard />
          <Footer />
          
        </div>
  );
}

