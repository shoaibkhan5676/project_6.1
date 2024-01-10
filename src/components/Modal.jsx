import React from 'react'
import { createPortal } from 'react-dom';
import {AiOutlineClose} from "react-icons/ai"

const Modal = (props) => {



    return createPortal(
        <>
   


            <div  className='h-screen flex w-screen absolute top-0 backdrop-blur '>
                <div className='m-auto w-[330px] p-2 rounded-lg h-[240px] bg-white ' >
                     <div className='flex justify-end'>
                        <AiOutlineClose onClick={props.ModalOFF} className='text-xl cursor-pointer' />
                     </div>

                   {props.children}

                </div>

            </div>
          

          
        </>,
        document.getElementById("modal-root")
      );
};


export default Modal
