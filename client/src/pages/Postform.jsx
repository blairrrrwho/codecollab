import React from 'react';
import Button from './Button';

const Postform = () => {
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

