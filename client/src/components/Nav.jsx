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
        <ul className={`md:flex ${open ? 'block' : 'hidden'}`}>
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
    </nav>
  );
}
