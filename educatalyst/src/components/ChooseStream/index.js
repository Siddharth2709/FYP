import React from 'react'
//import '../style.css'
import { useEffect, useState } from 'react'
import Home from '../Home/index_alt'
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

    <div class="container">
  <div class="row">
    <div class="col align-self-start">
        <div>
            <a href="./scienceMarksEntry.html">
                <img class="image1" src="../../assets/science.gif"/>
            </a>
          </div>
    </div>
    <div class="col align-self-center">
        <div>
            <a href="./commerceMarksEntry.html">
                <img class="image1" src="../../assets/commerce.gif"/>
            </a>
          </div>
    </div>
    <div class="col align-self-end">
        <div>
            <a href="./artsMarksEntry.html">
                <img class="image1" src="../../assets\arts.gif"/>
            </a>
          </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default ChooseStream