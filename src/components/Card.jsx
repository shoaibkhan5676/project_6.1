import React from 'react'
import AddorUpdateContact from './AddorUpdateContact'
import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import useDisclouse from '../hooks/useDisclose'
import { toast } from 'react-toastify'

const Card = (props) => {
    
  const { ModalOFF, ModalON, showmodal }=useDisclouse()


    const DeleteContact=async(id)=>{
        try{
            await deleteDoc(doc(db,"Contacts",id))
            toast.success("Contact Successfully Deleted")


        }
        catch(err){
            console.log(err)
        }
    }



  return (
    <>
    <div className='flex items-center p-1 bg-lite-dark-color justify-between rounded-lg'>
          <div className='flex gap-1 items-center '>
            <HiOutlineUserCircle  className='text-5xl text-blue-color-for-button'/>
            <div className='text-white'>
              <h1 className='text-sm font-medium'>{props.name}</h1>
              <p className='text-sm'>{props.email}</p>
            </div>

          </div>
        <div className='text-white flex'>
          <RiEditCircleLine onClick={ModalON} className='text-3xl cursor-pointer ' />
          <IoMdTrash onClick={()=>DeleteContact(props.id)} className='text-3xl cursor-pointer text-red-500 ' />
        </div>

        </div>


        <AddorUpdateContact isUpdate={true} showmodal={showmodal}  ModalOFF={ModalOFF} email={props.email} name={props.name} id={props.id}  />
      
    </>
  )
}

export default Card
