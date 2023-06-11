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

			<form className="flex flex-col bg-white rounded p-4 sm:p-8" noValidate={validated} onSubmit={handleFormSubmit}>
				<h1 class="font-bold text-2xl mb-4">Welcome back! :)</h1>
				<div className="mb-4">
					<label className="text-gray-700 text-sm font-semibold" htmlFor="email">
						Email
						<span className="text-red-500 text-xs">*</span>
					</label>
					<input
						className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
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

				<div className="mt-3">
					<label className="text-gray-700 text-sm font-semibold" htmlFor="password">
						Password
						<span className="text-red-500 text-xs">*</span>
					</label>
					<input
						className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
						id="password"
						type="password"
						placeholder="******************"
						name="password"
						onChange={handleInputChange}
						value={userFormData.password}
						required
					/>
				</div>

				<div className="">
					<button
						className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
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