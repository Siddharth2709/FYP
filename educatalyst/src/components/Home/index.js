import React from 'react'
import '../style.css'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const Home = (props) => {

    const [firstName, setFirstName] = useState('John')
    const [lastName,setLastName] = useState('Doe')
    


    let navigate = useNavigate(); 
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
          case "firstName":
            setFirstName(value);
            break;
          case "lastName":
            setLastName(value);
            break;
      
        }

        }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        props.setModal(false)
        let name = firstName + ' ' + lastName
        props.setUserName(name)
        //props.setUserName(name)
      //   let path = `/chooseStream`; 
      // navigate(path);
    } 

  return (
    <div>
<form  id="form" onsubmit="return false;" style={{paddingBottom:'30px'}}>
        <label for="fname" >Enter your First name: </label> 
        <input
              autoComplete="off"
              className="form-control"
              type="name"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
              
            />
 
    <label for="lname" style={{paddingTop:'30px'}}>Enter your Last name: </label> 
    <input
              autoComplete="off"
              className="form-control"
              type="name"
              name="lastName"
              onChange={handleChange}
              value={lastName}
              required
            />
</form>

<button class="btn btn-outline-secondary" onClick={handleSubmit} >
Continue
</button>

</div>

  )
}

export default Home