import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Addaxios() {
    const [userdata,setUserdata]=useState([]);
    const URL="https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
        axios.get({URL})
        .then((response)=>{
          // console.log(response)
            setUserdata(response.data)
        }).catch((err)=>{console.log(err.log)})
    },[])
  return (
    <div>
      Addaxios tutorial
      {userdata.map((data)=>{
        return(
            <div>{data.name}</div>
        )
      })}
    </div>
  )
}

export default Addaxios
