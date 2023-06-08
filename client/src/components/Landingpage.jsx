import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login'; 
import cardImage from './imgs/placeholder.png';



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

    <div className="w-full h-screen bg-yellow-500">
      <div className="h-screen flex items-center justify-center">
        <div className="h-5/6 w-5/6 rounded-lg overflow-hidden shadow-2xl shadow-black bg-white">
          <img className="mt-4 mx-auto" src={cardImage} alt="Test" />
          <div className="px-6 py-4 flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2">
              <div className='font-bold text-2xl cursor-pointer flex items-center font-[Monospace]
            text-gray-800'>
                <span className='text-3xl text-yellow-500 mr-1 pt-2'>
                  <ion-icon name="code-outline"></ion-icon>
                </span>
                CodeCollab
              </div>
            </div>
            <p className="text-gray-700 text-base text-center">
              Coding is a fascinating and transformative skill that has revolutionized the way we live and interact with technology. At its core, coding is the art of instructing computers to perform specific tasks through the use of programming languages. It is a language of logic and problem-solving, where creativity meets precision.
              <br></br>
              <br></br>
              One of the most remarkable aspects of coding is its ability to empower individuals to bring their ideas to life. With a few lines of code, one can create websites, mobile applications, video games, artificial intelligence systems, and much more. Coding opens up a world of endless possibilities, enabling innovation and pushing the boundaries of what is possible.
              <br></br>
              <br></br>
              The process of coding requires a unique mindset. It demands attention to detail, patience, and a willingness to tackle challenges head-on. It involves breaking down complex problems into smaller, more manageable components and designing elegant solutions. Coding is like solving a puzzle, where every line of code contributes to the bigger picture.
            </p>
          </div>
          <div className="py-4 flex justify-center">
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => openModal('login')}
            >
              Login
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
              onClick={() => openModal('signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
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



