import React from 'react'
import './style.css'
import '../Home/assets/css/style.css'
import { useEffect, useState } from 'react'
//import Home from '../Home/index_alt';
import { BrowserRouter } from 'react-router-dom';
import WithNavigate from '../Forms/components/MasterForm';
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
     
     <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
  
          <h2>Help Us Know You Better!</h2>
        </div>
      </div>
    
   
 
    <WithNavigate/>
    
    
    </div>
    </>
  )
}

export default ChooseStream