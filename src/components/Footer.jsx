import React from 'react';

export default function Footer() {
    return (
        <footer className='bg-yellow-700 text-white flex text-lg w-full h-14 items-center justify-center mt-auto fixed bottom-0 left-0'>
            <h1 className='text-xl mr-1'>Made with love</h1>
            
            <div className='text-xl mr-1'>
            <ion-icon name="heart-outline"></ion-icon>
            </div>
            <p>-</p>
            <div className='text-xl ml-1'>
            <ion-icon name="logo-github"></ion-icon>
            </div>
        </footer>
    );
}
