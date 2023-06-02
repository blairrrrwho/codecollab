import React from 'react';
import Button from './Button';

const Login = () => {
    return (
   <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-700">

	{/* <!-- Component Start --> */}
	<h1 className="font-bold text-2xl">Welcome! :)</h1>
	<form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="" >
		<label className="font-semibold text-xs" for="usernameField">First Name</label>
		<input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
        <label className="font-semibold text-xs mt-3" for="passwordField">Last Name</label>
		<input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="text" />
        <label className="font-semibold text-xs mt-3" for="passwordField">Username</label>
		<input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="text" />
        <label className="font-semibold text-xs mt-3" for="passwordField">Email</label>
		<input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="text" />
		<label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
		<input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"type="password" />
		<button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Sign Up!</button>
	</form>
	{/* <!-- Component End  --> */}

   </div>
    );
};

export default Login;