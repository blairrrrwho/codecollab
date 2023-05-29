import React from 'react'

const Button = (props) => {
    return (
        <button className='bg-yellow-700 text-white font-[Monospace] py-2 px-6 rounded md:ml-8 hover:bg-yellow-500
        duration-500 mr-8 md:ml-8 md:mr-0'>
            {props.children}
        </button>
    )
}

export default Button