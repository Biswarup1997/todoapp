import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';


function ContactList(props) {
   // console.log(contact,"from contact list")
   const {contact, removeContact}=props
   console.log(contact)
    const ContactList= contact.map((val)=>{
        return(
 <div className='contacts'>
    <div style={{marginleft:"200px"}}>Name: {val.data.name}</div>
    <div>Email: {val.data.email}</div>
    <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
 </div>
        )
    })
  return (
    <div>
      contact List
      <div>{ContactList}</div>
    </div>
  )
}

export default ContactList
