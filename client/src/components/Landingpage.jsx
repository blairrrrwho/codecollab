import React, { useState } from 'react';
import codeImage from './imgs/placeholder.png'

export default function LandingPage() {
  const [showSignup, setShowSignup] = useState(false);

  const openSignup = () => {
    setShowSignup(true);
  };

  const closeSignup = () => {
    setShowSignup(false);
  };

  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (

    <div className="w-full h-screen bg-yellow-500">
      <div className="h-screen flex items-center justify-center">
        <div className="h-5/6 w-5/6 rounded-lg overflow-hidden shadow-2xl shadow-black bg-white">
          <img className="mt-4 mx-auto" src={codeImage} alt="Test" />
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-8" onClick={openLogin}>
              Login
            </button>
            {showLogin && (
              <div>
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
                  <div className="w-[600px]">
                    
                    <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-center w-screen h-screen text-gray-700">


                      <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="" >
                      <button className="text-black text-xl place-self-end" onClick={closeLogin}>X</button>
                      <h1 className="font-bold text-2xl">Welcome Back :)</h1>
                        <label className="font-semibold text-xs mt-3" for="usernameField">Username or Email</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
                        <div className="flex mt-6 justify-center text-xs">
                          
                          
                          
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            )}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8" onClick={openSignup}>
              Sign Up
            </button>
            {/* signup modal */}
            {showSignup && (
              <div>
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
                  <div className="w-[600px]">
                    {/* this is where the content stuff goes */}
                    <div className="absolute inset-y-0 left-0 flex flex-col items-center justify-center w-screen h-screen text-gray-700">


                      {/* <!-- Component Start --> */}
                      <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-1" action="" >
                        <button className="text-black text-xl place-self-end" onClick={closeSignup}>X</button>
                        <h1 className="font-bold text-2xl">Welcome! :)</h1>
                        <label className="font-semibold text-xs mt-3" for="usernameField">First Name</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Last Name</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Username</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Email</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
                        <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Sign Up!</button>
                      </form>
                      {/* <!-- Component End  --> */}

                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}






