import React, { useState } from 'react';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';


export default function SignupForm() {
  const [userFormData, setUserFormData] = useState({ firstname: '', lastname: '', username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [createUser] = useMutation(ADD_USER);
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
      const { data } = await createUser({
        variables: { ...userFormData }
      });

      Auth.login(data.addUser.token);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form className="flex flex-col bg-white rounded p-4 sm:p-8" noValidate={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        {showAlert && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">Something went wrong with your signup!</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setShowAlert(false)}
              >
                <title>Close</title>
                <path
                  d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L10 8.414l-2.93 2.93a.999.999 0 1 0 1.414 1.414l2.93-2.93 2.93 2.93a.999.999 0 1 0 1.414-1.414l-2.93-2.93 2.93-2.93a.999.999 0 1 0-1.414-1.414l-2.93 2.93z"
                />
              </svg>
            </span>
          </div>
        )}

        <h1 className="font-bold text-gray-700 text-2xl mb-4">Welcome! :)</h1>
        <p className="flex text-gray-700 text-sm mb-4">We are thrilled you're here. <br></br>Join to post and see other posts!</p>
        <div className="mt-2">
          <label className="text-gray-700 text-sm font-semibold" htmlFor="username">
            First Name
            <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            id="firstname"
            type="text"
            placeholder="Your first name"
            name="firstname"
            onChange={handleInputChange}
            value={userFormData.firstname}
            required
          />
        </div>

        <div className="mt-2">
          <label className="text-gray-700 text-sm font-semibold" htmlFor="username">
            Last Name
            <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            id="lastname"
            type="text"
            placeholder="Your last name"
            name="lastname"
            onChange={handleInputChange}
            value={userFormData.lastname}
            required
          />
        </div>

        <div className="mt-2">
          <label className="text-gray-700 text-sm font-semibold" htmlFor="username">
            Username
            <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            id="username"
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
        </div>

        <div className="mt-2">
          <label className="text-gray-700 text-sm font-semibold" htmlFor="email">
            Email
            <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            id="email"
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </div>

        <div className="mt-2">
          <label className="text-gray-700 text-sm font-semibold" htmlFor="password">
            Password
            <span className="text-red-500 text-xs">*</span>
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            id="password"
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </div>

        <button
          className="flex items-center justify-center h-12 px-6 w-64 bg-green-500 mt-8 rounded font-semibold text-sm text-green-100 hover:bg-green-700 hover:cursor-pointer"
          type="submit"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
        >
          Signup
        </button>
      </form>
    </>
  );

};