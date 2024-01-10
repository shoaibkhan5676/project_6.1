import React, { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from './components/Card'
import useDisclouse from './hooks/useDisclose'
import AddorUpdateContact from './components/AddorUpdateContact'
import NoContactFound from './components/NoContactFound'

const App = () => {
  const [contactData, setcontactData] = useState()
  const { ModalOFF, ModalON, showmodal }=useDisclouse()
  const [filterContact,setfilterContact]=useState(null)



  useEffect(() => {
    const getContacts = async () => {

      try {
        const contactRefs = collection(db, "Contacts")

        onSnapshot(contactRefs,(snapshot)=>{
          const ContactList=snapshot.docs.map((element)=>{
            return{
              id:element.id,
              ...element.data()

            }

          })
          setfilterContact(ContactList)
          setcontactData(ContactList)

        })





      }
      catch (err) {
        console.log(err)
      }
    }
    getContacts()


  }, [])

  const handleChange=(e)=>{
    let searchVal=e.target.value
    if (searchVal===""){
      setfilterContact(contactData)
      return
        
    }


    const filterdresult=contactData.filter((element)=>{

      return(
        element.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    })
    setfilterContact(filterdresult)





  }





  return (
    <>
      <Navbar handleChange={handleChange}  ModalON={ModalON} />

{filterContact?.length<=0?<NoContactFound/>:
      <div className='max-w-[370px] mx-auto flex gap-2 flex-col ' >
        {
          filterContact?.map((element)=>{
            return(
              <Card  key={element.id} name={element.name} email={element.email} id={element.id}  />

            )
          })
        }
        
        
      </div>
}

        <AddorUpdateContact isUpdate={false} showmodal={showmodal}  ModalOFF={ModalOFF} />

        <ToastContainer position='bottom-center' />
    </>
  )
}

export default App
