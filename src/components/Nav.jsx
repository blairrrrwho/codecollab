import React, { useState, useEffect } from 'react';

const Nav = (props) => {
  let [open, setOpen] = useState(false);

  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = currentTab;
  }, [currentTab]);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Monospace] text-gray-800'>
          <span className='text-3xl text-yellow-500 mr-1 pt-2'>
            <ion-icon name="code-outline"></ion-icon>
          </span>
          CodeCollab
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px]'
          } md:opacity-100 opacity-0`}
        >
          <li>
            <button
              className={`bg-yellow-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-500 mr-8 md:ml-8 md:mr-0 ${
                currentTab === 'Home' ? 'bg-yellow-500' : ''
              }`}
              onClick={() => handleTabChange('Home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`bg-yellow-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-500 mr-8 md:ml-8 md:mr-0 ${
                currentTab === 'About' ? 'bg-yellow-500' : ''
              }`}
              onClick={() => handleTabChange('About')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`bg-yellow-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-500 mr-8 md:ml-8 md:mr-0 ${
                currentTab === 'Login' ? 'bg-yellow-500' : ''
              }`}
              onClick={() => handleTabChange('Login')}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className={`bg-yellow-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 duration-500 mr-8 md:ml-8 md:mr-0 ${
                currentTab === 'Sign Up' ? 'bg-yellow-500' : ''
              }`}
              onClick={() => handleTabChange('Sign Up')}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
