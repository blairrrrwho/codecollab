import React from 'react';

export default function Footer() {
    return (
        <footer className='z-20 bg-yellow-700 text-white flex w-full h-14 items-center justify-center mt-auto fixed bottom-0 left-0'>
            <h1 className='text-2xl mr-1'>Made with</h1>
        <div className='text-2xl mr-1'>
        <ion-icon name="heart-outline"></ion-icon>
        </div>
        <p className='text-2xl'>-</p>
        <div className='text-2xl ml-1'>
        <ion-icon name="logo-github"></ion-icon>
        </div>
        </footer>
    );
}
