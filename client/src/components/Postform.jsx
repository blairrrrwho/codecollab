import React from 'react';
import Button from './Button';

const Postform = () => {
  return (
    <div className='bg-yellow-800 w-full h-screen'>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-black lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-yellow-700 underline uppercase decoration-solid">
          Make a post about whatever!
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Title</span>
              <input
                type="text"
                name="post title"
                className="
            w-full
            block px-1 py-2 mt-2
            border
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring
            focus:ring-yellow-200
            focus:ring-opacity-50
          "
                placeholder="Title of your post"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-gray-700">What do you want to post?</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-1 py-1
            border
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-yellow-300
            focus:ring
            focus:ring-yellow-200
            focus:ring-opacity-50
          "
                rows="5"
                placeholder="Write something here"
              ></textarea>
            </label>
          </div>

          <div className="mb-6 mt-3 float-right">
            <Button>
              Submit
            </Button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Postform;