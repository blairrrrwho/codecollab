import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login'; 

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
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-yellow-200 to-yellow-300">
      <div className="absolute inset-0 bg-cover bg-blur"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/75"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <div className="font-bold text-3xl mb-2">
            <div className='font-bold text-4xl cursor-pointer flex items-center font-[Monospace] text-gray-800 shadow-md'>
              <span className='text-3xl text-yellow-500 mr-1 pt-2'>
                <ion-icon name="code-outline"></ion-icon>
              </span>
              CodeCollab
            </div>
          </div>
          <p className="text-gray-700 text-lg text-center mx-auto mb-6">
            Welcome to our blog, a vibrant online community where software developers come together to share their thoughts and valuable resources. Whether you're an experienced coder, a passionate newbie, or somewhere in between, our platform offers a space for you to connect with like-minded individuals, exchange ideas, and expand your knowledge in the ever-evolving world of software development. We strive to foster an environment that encourages collaboration, learning, and professional growth. So, join us on this exciting journey as we dive into the latest trends, best practices, and innovative solutions, all while building a strong community of developers who are dedicated to pushing the boundaries of technology.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-rose-700 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline mr-4"
              onClick={() => openModal('login')}
            >
              Login
            </button>
            <button
              className="bg-rose-700 hover:bg-amber-500 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
              onClick={() => openModal('signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black transition-opacity duration-300 ${showModal ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex justify-end px-6 py-4">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
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
