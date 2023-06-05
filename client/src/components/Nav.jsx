import React, { useState } from 'react'
import Button from './Button'

const Nav = () => {
    const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	}

    let Links =[
        {name: "HOME", link:"/"},
        {name: "ABOUT", link:"/"}
    ];
    let [open,setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Monospace]
            text-gray-800'>
                <span className='text-3xl text-yellow-500 mr-1 pt-2'>
                <ion-icon name="code-outline"></ion-icon>
                </span>
                CodeCollab
            </div>

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden
            '>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>   
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
            bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500
            ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href={Link.link} className='text-gray-800 hover:text-yellow-500'>{Link.name}</a>
                        </li>
                    ))    
                }
                <Button>
                    Login
                </Button>
                <Button onClick={openModal}> 
                    SignUp
                </Button>
                {/* signup modal */}
                {showModal && (
				<div>
					<div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center">
						<div className="w-[600px]">
							{/* <button className="text-white text-xl place-self-end" onClick={closeModal}>X</button> */}
							{/* this is where the content stuff goes */}
							<div className="flex flex-col items-center justify-center w-screen h-screen text-gray-700">

								{/* <!-- Component Start --> */}
								<h1 className="font-bold text-2xl">Welcome! :)</h1>
								<form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="" >
									<label className="font-semibold text-xs" for="usernameField">First Name</label>
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
								<button className="text-white text-xl place-self-end" onClick={closeModal}>X</button>
								{/* <!-- Component End  --> */}

							</div>
						</div>
					</div>
				</div>
			) }
		<div/>
            </ul>   
            </div>
        </div>
    )
}

export default Nav