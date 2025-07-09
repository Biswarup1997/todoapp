import Header from './components/Header';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import { useState } from 'react';
import uuid4 from 'uuid4'
//import Addaxios from './components/Addaxios';
import Axiospost from './components/Axiospost';
function App() {
  const [contact, setContact]=useState([])
  const addcontacts=(data)=>{
    setContact([...contact,{id:uuid4(),data}])
      
  }
  const removeContact=(id)=>{
    const updatedList = contact.filter((val)=>{
          return val.id !== id;
    })
    setContact(updatedList)
  }
  return (
    <div>
      <Header/>
      <AddContacts addcontacts={addcontacts}/>
      <ContactList contact={contact} removeContact={removeContact}/>
      
      <Axiospost/>
    </div>
  );
}

export default App;
