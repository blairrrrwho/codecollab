import React from 'react'
import Avatar from "boring-avatars";

const Postcard = () => {
    return (
        <div className='bg-yellow-800 w-full h-screen'>
            <div className="rounded-2xl relative p-6 bg-white my-8 h-52 shadow-md text-left mt-32">
                <div className="rounded-t-md h-16 w-full bg-yellow-100 absolute top-0 left-0 flex">
                    <h2 className="text-2xl text-gray-700 flex-1 mt-10 mx-4">Article Title</h2>
                    <Avatar
                        size={80}
                        name="Maria Mitchell"
                        variant="marble"
                        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />;
                </div>
                <div className="bottom">
                </div>
            </div>
        </div>
    )
}

export default Postcard;