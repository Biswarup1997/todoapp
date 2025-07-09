import { useState } from "react"
import React from 'react'

function AddContacts({addcontacts}) {
    const [contactData,setContactData]=useState({name:"",email:""});
    function handlechange(event){
        const name=event.target.name;
        const value=event.target.value;
        setContactData({...contactData,[name]:value})
    }
    function handleclick(){
         if(contactData.name==="" || contactData.email===""){
              alert("Please enter something into the empty feilds")
              return
         }
          addcontacts(contactData)
          setContactData({name:"",email:""})
    }
  return (
    <div className='formheader'>
     <div className='add-contact'> Add contacts</div>
     <form>
       <label>Name:</label><br/>
       <input type="text" placeholder="Enter your Name" name="name" value={contactData.name} onChange={handlechange}/><br/>
       <label>Email:</label><br/>
       <input type="email" placeholder="Enter your Email" name="email" value={contactData.email} onChange={handlechange}/><br/>
     </form>
     <button className='btn'onClick={handleclick}>Add contact</button>
    </div>
  )
}

export default AddContacts
