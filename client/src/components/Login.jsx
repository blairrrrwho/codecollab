import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
	const [validated] = useState(false);
	const [loginUser] = useMutation(LOGIN_USER);
	const navigate = useNavigate()

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		try {
			const { data } = await loginUser({
				variables: { ...userFormData }
			});

			Auth.login(data.login.token);
			navigate("/home")
		} catch (err) {
			console.error(err);
		}

		setUserFormData({
			email: '',
			password: '',
		});


	};

	return (
		<>

			<form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" noValidate={validated} onSubmit={handleFormSubmit}>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
						Email
						<span className="text-red-500 text-xs italic">*</span>
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						placeholder="Your email"
						name="email"
						onChange={handleInputChange}
						value={userFormData.email}
						required
					/>
					{/* <p className="text-red-500 text-xs italic">Email is required!</p> */}
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Password
						<span className="text-red-500 text-xs italic">*</span>
					</label>
					<input
						className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						placeholder="******************"
						name="password"
						onChange={handleInputChange}
						value={userFormData.password}
						required
					/>
					{/* <p className="text-red-500 text-xs italic">Password is required!</p> */}
				</div>

				<div className="flex items-center justify-between">
					<button
						className="x items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
						type="submit"
					>
						Login
					</button>
					<div className="flex mt-6 justify-center text-xs">
					<a
						className="text-blue-400 hover:text-blue-500"
						href="/"
					>
						Forgot Password?
					</a>
					</div>
				</div>
			</form>

		</>
	);

};