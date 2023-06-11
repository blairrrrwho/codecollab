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

        <div className="h-screen flex justify-center items-center" style={{
            background: "linear-gradient(to bottom, #FF6600, #FFCC00, #FF9900, #FF0066)",
        }}>
            <div className="h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 mt-8 ml-8">
                <div className='font-bold text-3xl cursor-pointer flex items-center font-[Monospace] text-gray-800'>
                    <span className='text-3xl mr-1 pt-2'>
                        <ion-icon name="code-outline"></ion-icon>
                    </span>
                    CodeCollab
                </div>

                <div className="h-2/3 w-2/3 rounded-lg overflow-hidden border-double border-4 border-gray-600 bg-gray-300/50 shadow-2xl shadow-black flex flex-col justify-center items-center">
                    <div className="flex p-2 mt-8 mx-6 justify-center text-gray-700 text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Insert witty short slogan here</div>
                    {/* <img className="object-scale-down h-48 w-96 mt-4 mx-auto" src={cardImage} alt="CodeCollab" /> */}
                    <div className="px-4 flex flex-col justify-center items-center">
                        <p className="text-gray-700 text-center p-4 md:p-8 mx-2 md:mx-6">
                            Join our coding bootcamp graduates' blog to connect with fellow alumni and share valuable resources. Create an account to access a curated collection of coding tutorials, articles, and industry insights. Our inclusive community is here to support your learning journey. Discover advice, success stories, and discuss the latest trends in a supportive environment. Join us today and tap into the collective knowledge of our coding bootcamp community!
                        </p>
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



