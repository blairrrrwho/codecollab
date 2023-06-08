import React, { useState } from 'react';
import Auth from '../utils/auth';

const Nav = () => {
    // let Links = [
    //     { name: "HOME", link: "/" },
    //     { name: "ABOUT", link: "/" }
    // ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-20'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Monospace]
            text-gray-800'>
                    <span className='text-3xl text-yellow-500 mr-1 pt-2'>
                        <ion-icon name="code-outline"></ion-icon>
                    </span>
                    CodeCollab
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden
            '>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
            bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500
            ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {/* {
                        Links.map((Link) => (
                            <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={Link.link} className='text-gray-800 hover:text-yellow-500'>{Link.name}</a>
                            </li>
                        ))
                    } */}
                    {/* User profile icon */}
                    <div className="flex flex-col items-center text-3xl m-1 mt-2 text-gray-800 hover:text-amber-500 hover:cursor-pointer">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <p className="text-gray-800 text-xs font-[Monospace]">Profile</p>
                    </div>

                    <button className='bg-rose-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-amber-500
                    duration-500 mr-8 md:ml-8 md:mr-0' onClick={Auth.logout}>Logout
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Nav