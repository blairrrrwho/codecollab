import React from 'react';
import Navigation from './Nav';

export default function Header(props) {
  const { currentTab, handleTabChange } = props

  return (
    <div className='header'>
      <section>
        <header className='headerTitle'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Monospace]
            text-gray-800'>
                <span className='text-3xl text-yellow-500 mr-1 pt-2'>
                <ion-icon name="code-outline"></ion-icon>
                </span>
                CodeCollab
            </div>
          <div>
            <Navigation
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navigation>
          </div>
        </header>
      </section>
    </div>
  );
}