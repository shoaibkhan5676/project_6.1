import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc,  } from 
'firebase/firestore';
import { db } from '../config/firebase';
import * as Yup from "yup"
import { toast } from 'react-toastify';

const AddorUpdateContact = (props) => {

    const AddContact=async(values)=>{
        try{

            const contactRefs=collection(db,"Contacts")
            await addDoc(contactRefs,values)
            toast.success("Contact Successfully Added")
            props.ModalOFF()
        }
        catch(err){
            console.log(err)
        }

    }
  

    const UpdateContact=async(values,id)=>{
        try{
            const contactRefs=doc(db,"Contacts",id)
            await updateDoc(contactRefs,values)
            toast.success("Contact Successfully Update")
            props.ModalOFF()



        }catch(err){
            console.log(err)
        }

    }
    const ValidationScheme=Yup.object().shape({
        name:Yup.string().required("Name is Required"),
        email:Yup.string().email("Invalid Email").required("Email is Required")
    })




    return (
        <>

            {props.showmodal&&<Modal  isUpdate={props.isUpdate} ModalOFF={props.ModalOFF} >


                <Formik

                    validationSchema={ValidationScheme}
                    initialValues={
                        props.isUpdate
                            ? {
                                name: props.name,
                                email: props.email,
                            }
                            : {
                                name: "",
                                email: "",
                            }
                    }
                    onSubmit={(values) => {
                        props.isUpdate?
                        UpdateContact(values,props.id):
                        AddContact(values)

                    }}>

                    <Form className='flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="name">Name: </label>
                            <Field name="name" className='border h-8 rounded-md border-black outline-none px-2 ' />
                            <div className='text-xs text-red-500' >
                            <ErrorMessage name="name" />
                            </div>
                        
                        
                        </div>


                        <div className='flex flex-col'>
                            <label htmlFor="email">Email: </label>
                            <Field name="email" className='border h-8  rounded-md border-black outline-none px-2 ' />
                        
                            <div className='text-xs text-red-500' >
                                <ErrorMessage name='email' />
                            </div>
                        
                        </div>

                        <button  className='bg-black text-white self-end px-2 py-1 my-2 rounded-md' type='submit' >{props.isUpdate?"Save Contact":"Add Contact"}</button>
                    </Form>



                </Formik>


            </Modal>}



        </>
    )
}

export default AddorUpdateContact
