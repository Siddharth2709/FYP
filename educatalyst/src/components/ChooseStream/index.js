import React from 'react'
//import '../style.css'
import { useEffect, useState } from 'react'
import Home from '../Home/index_alt';
import MasterForm from '../Forms/components/MasterForm';
const ChooseStream = () => {

    const [name , setName] = useState('John Doe')
    useEffect(()=>{
      let name = ' ';
       name = localStorage.getItem('firstName')
       name  = name+' '+ localStorage.getItem('lastName')
       setName(name)
           // do stuff here...
    }, []) // <-- empty dependency array

  return (
      <>
      <Home name={name}></Home>
    <div>
       
    
    <h3 id="userName"> Welcome  {name} </h3>
    <br/>
    <h4>Please choose your Stream</h4>
    <br/>
    <MasterForm/>
    
    </div>
    </>
  )
}

export default ChooseStream