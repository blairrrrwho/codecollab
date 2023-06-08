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
        <footer className='z-20 bg-yellow-700 text-white flex w-full h-14 mt-auto fixed bottom-0 left-0'>
            <div className='bg-yellow-700 text-white flex w-full h-14 items-center justify-center mt-auto fixed bottom-0 left-0'>
                <h1 className='text-xl ml-1'>Made with</h1>
                <div className='text-2xl m-1 mt-2'>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <p className='text-xl'>-</p>
                <div className='text-2xl m-1 mt-2'>
                    <ion-icon name="logo-github"></ion-icon>
                </div>
            </div>
            <div className='cursor-pointer flex items-center mr-4 ml-auto z-10' onClick={openModal}>
                <div className='text-2xl mt-1'>
                    <ion-icon name="code-outline"></ion-icon>
                </div>
                <p className='text-2xl font-[Monospace]'>Devs</p>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
                    <div className="bg-white text-black p-8 rounded-lg z-50 max-w-sm w-full">
                        <h2 className="text-2xl mb-4 text-center">Our Developers</h2>
                        <ul className="space-y-4 text-center">
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Carson Barnes</p>
                                <a href="https://github.com/cbarnes0" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/cb019803/" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Aaron Dreyer</p>
                                <a href="https://github.com/AaronDreyer" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/aarondreyer/" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Christina Hall</p>
                                <a href="https://github.com/alc0ve" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/christina-h-05361b25b/" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Will Kerby</p>
                                <a href="https://github.com/wkerby" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/william-kerby-5b4267127/" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Terry Lequernaque</p>
                                <a href="https://github.com/tlequernaque" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>
                            <li className='flex items-center justify-center space-x-4'>
                                <p>Blair Millet</p>
                                <a href="https://github.com/blairrrrwho" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                                <a href="https://www.linkedin.com/in/blair-millet/" target="_blank" className="text-gray-500 hover:text-yellow-500 text-3xl">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded mt-4 w-full hover:bg-yellow-500" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
}
