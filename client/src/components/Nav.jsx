import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

export default function Nav(props) {
  const { currentTab, handleTabChange } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab);
  }, [currentTab]);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="flex">
        <div className={`sidebar bg-white shadow-md ${open ? 'w-64' : 'w-0'} transition-all duration-500 ease-in`}>
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li className="text-gray-800 hover:text-yellow-500">
              <a href="#Home" onClick={() => handleTabChange('Home')}>Home</a>
            </li>
            <li className="text-gray-800 hover:text-yellow-500">
              <a href="#About" onClick={() => handleTabChange('About')}>About</a>
            </li>
          </ul>
        </div>
        <div className="flex-grow">
          <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Monospace] text-gray-800">
              <span className="text-3xl text-yellow-500 mr-1 pt-2">
                <ion-icon name="code-outline"></ion-icon>
              </span>
              CodeCollab
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>
            <ul>
              <li>
                <a
                  href="#Home"
                  onClick={() => handleTabChange('Home')}
                  className={`text-gray-800 hover:text-yellow-500 ${
                    currentTab === 'Home' ? 'nav-link active' : 'nav-link'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  onClick={() => handleTabChange('About')}
                  className={`text-gray-800 hover:text-yellow-500 ${
                    currentTab === 'About' ? 'nav-link active' : 'nav-link'
                  }`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
