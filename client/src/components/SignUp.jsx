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
      <form noValidate={validated} onSubmit={handleFormSubmit}>
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="Your first name"
            name="firstname"
            onChange={handleInputChange}
            value={userFormData.firstname}
            required
          />
          <p className="text-red-500 text-xs italic">First Name is required!</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Your last name"
            name="lastname"
            onChange={handleInputChange}
            value={userFormData.lastname}
            required
          />
          <p className="text-red-500 text-xs italic">Last Name is required!</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <p className="text-red-500 text-xs italic">Username is required!</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <p className="text-red-500 text-xs italic">Email is required!</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <p className="text-red-500 text-xs italic">Password is required!</p>
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
        >
          Submit
        </button>
      </form>
    </>
  );

};