import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import {FiSearch} from "react-icons/fi"


const Navbar = (props) => {
    return (
        <>
            <div className='max-w-[370px] bg-white flex min-h-[55px] rounded-lg   justify-center gap-1 items-center  mx-auto'>
                <div>
                    <img src="src/Images/logos_firebase.svg" alt="" />
                </div>
                <h1 className='font-medium'>Firebase Contact App</h1>

            </div>
            <div className='max-w-[370px] relative my-2 mx-auto flex items-center'>
                <FiSearch className='text-2xl absolute left-1 text-white' />
                <input onChange={props.handleChange} className="flex-grow h-[40px] outline-none  text-white rounded-lg border border-white bg-transparent px-9 " placeholder='Search Contact.' type="text" />
                <AiFillPlusCircle onClick={props.ModalON} className="text-white cursor-pointer text-5xl" />

            </div>

        </>
    )
}

export default Navbar
