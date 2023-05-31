import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';

export default function Nav(props) {
  const { currentTab, handleTabChange } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);


  return (
    <nav className='shadow-md w-full fixed top-0 left-0'>
      <div>
      <ul>
        <li>
          <a
            href="#Home"
            onClick={(e) => handleTabChange('Home')}
            className={`text-gray-800 hover:text-yellow-500 ${currentTab === 'Home' ? 'nav-link active' : 'nav-link'}`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#About"
            onClick={(e) => handleTabChange('About')}
            className={`text-gray-800 hover:text-yellow-500 ${currentTab === 'About' ? 'nav-link active' : 'nav-link'}`}
          >
            About
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}
