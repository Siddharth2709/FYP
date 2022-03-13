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
     <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="/">Educatalyst</a></h1>
     
       <a href="/" class="logo"><img src="../Home/assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          
          <li><div > <a class='nav-link scrollto'>Signed In: {name}</a></div></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
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