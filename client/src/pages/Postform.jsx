import React, { useState } from 'react';
import Button from './Button';
import Auth from "../utils/auth"
import { useMutation } from "@apollo/client"
import {ADD_POST} from "../../src/utils/mutations"

const Postform = () => {

  const [addPost, { error }] = useMutation(ADD_POST);
  const [postText, setPosText] = useState('')
  const [postTitle, setPosTitle] = useState('')

  const [userFormData, setUserFormData] = useState({postTitle: '', postText: '' })

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
    const username = Auth.getUser().data.username

    try {
      const { data } = await addPost({
        variables: { username, postTitle, postText },
      }); //how do I get username from the session data? Would it be in the client/src/utils/auth.js file where we decode?

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }




  return (
    <div className="bg-yellow-800 flex items-center justify-center">
      <div className="mb-16 mt-32 bg-gradient-to-b from-white from-50% to-yellow-100 drop-shadow-sm w-full p-6 bg-white rounded-md shadow-xl mx-4 md:mx-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
        <h1 className="text-2xl font-semibold text-center text-yellow-700 font-[Monospace]">
          Please share your thoughts or resources :)
        </h1>
        <form className="mt-2">
          <div className="mb-4">
            <label className="font-[Monospace] font-bold text-gray-700">
              Title
              <input
                type="text"
                name="post title"
                className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                placeholder="Title of your post"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="font-[Monospace] font-bold text-gray-700">
              What do you want to post?
              <textarea
                name="message"
                className="block w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                rows="5"
                placeholder="Write something here"
              ></textarea>
            </label>
          </div>

          <div className="mb-2 flex justify-end">
            <Button>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Postform;

