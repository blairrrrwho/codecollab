import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import cardImage from './imgs/sample-logo-codecollab.png';

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState('login');

  const openModal = (type) => {
    setShowModal(true);
    setFormType(type);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-400 min-h-screen h-screen">
      <div className="flex flex-col h-screen items-center justify-center">
        <div className="absolute top-0 left-0 m-6 flex items-center font-[Monospace] text-gray-800">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="code-outline"></ion-icon>
          </span>
          <span className="text-3xl">CodeCollab</span>
        </div>
        <div className="flex flex-col m-2 sm:m-16 md:m-32 lg:m-64 rounded-lg border-double border-4 border-gray-600/20 bg-gray-300/20 shadow-2xl relative shadow-gray-900 m-auto pt-12 flex-shrink-0">
          <div className="flex p-2 mt-8 mx-6 justify-center text-gray-700 text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Insert witty short slogan here
          </div>
          <div className="px-4 flex flex-col justify-center items-center">
            <p className="text-gray-700 text-center p-4 md:p-8 mx-2 md:mx-6">
            Join our bootcamp blog. Connect with alumni, share resources. Create an account for curated coding content, industry insights. Inclusive community supports your journey. Discover advice, success stories, discuss trends. Join today and tap into collective knowledge.            </p>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:space-x-4 mt-auto">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => openModal('login')}
            >
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 sm:mt-0"
              onClick={() => openModal('signup')}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4"></div> {/* Margin added below the buttons */}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
          <div className="bg-white rounded-lg shadow-lg w-full sm:w-auto">
            <div className="flex justify-end px-6 py-4">
              <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                Close
              </button>
            </div>
            <div className="p-6">
              {formType === 'login' && <Login handleModalClose={closeModal} />}
              {formType === 'signup' && <SignUp handleModalClose={closeModal} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
