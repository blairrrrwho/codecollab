import React, { useState } from 'react';

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <footer className="z-20 bg-yellow-700 text-white flex w-full h-14 mt-auto relative bottom-0 left-0">
        <div className="bg-yellow-700 text-white flex w-full h-14 items-center justify-between mt-auto relative bottom-0 left-0">
          <div className="flex items-center ml-4">
            <h1 className="text-xl ml-1">Made with</h1>
            <div className="text-2xl m-1 mt-2">
              <ion-icon name="heart-outline"></ion-icon>
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex items-center mr-4 ml-auto z-10"
          onClick={openModal}
        >
          <div className="text-2xl mt-1">
            <ion-icon name="code-outline"></ion-icon>
          </div>
          <p className="text-2xl font-[Monospace]">Devs</p>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
            <div className="bg-orange-200 text-black p-8 rounded-lg z-50 max-w-sm w-full">
              <h2 className="text-2xl mb-4 text-center font-[Monospace]">
                Our Developers
              </h2>
              <ul className="space-y-4 text-center">
                {/* Developers list */}
              </ul>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-yellow-500"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </footer>
    );
  }
  