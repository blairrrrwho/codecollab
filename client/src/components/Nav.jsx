import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import Button from './Button';

export default function Nav(props) {
  const { currentTab, handleTabChange } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab);
  }, [currentTab]);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="flex justify-between bg-white py-4 px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Monospace] text-gray-800">
          <span className="text-3xl text-yellow-500 mr-1 pt-2">
            <ion-icon name="code-outline"></ion-icon>
          </span>
          CodeCollab
        </div>
        <div className="md:hidden">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer"
          >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'block' : 'hidden'}`}>
          <li className="inline-block ml-4">
            <a
              href="#Home"
              onClick={() => handleTabChange('Home')}
              className={`text-gray-800 hover:text-yellow-500 ${
                currentTab === 'Home' ? 'nav-link active' : 'nav-link'
              }`}
            >
              <Button>Home</Button>
              
            </a>
            
          </li>
          <li className="inline-block ml-4">
          
            <a
              href="#About"
              onClick={() => handleTabChange('About')}
              className={`text-gray-800 hover:text-yellow-500 ${
                currentTab === 'About' ? 'nav-link active' : 'nav-link'
              }`}
            >
              <Button>About</Button>
            </a>
            
          </li>
        </ul>
        </div>
    </nav>
  );
}
