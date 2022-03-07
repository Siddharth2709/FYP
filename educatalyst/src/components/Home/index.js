import React from 'react'
import '../style.css'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';


const Home = () => {

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
        let path = `/chooseStream`; 
      navigate(path);
    } 

  return (
    <div>
<h1>Educatalyst </h1>
<h2>'Grab life by trust!'</h2>

<form  id="form" onsubmit="return false;">
        <label for="fname">Enter your First name: </label> 
        <input
              autoComplete="off"
              className="form-control"
              type="name"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
            />
  <br/><br/>
    <label for="lname">Enter your Last name: </label> 
    <input
              autoComplete="off"
              className="form-control"
              type="name"
              name="lastName"
              onChange={handleChange}
              value={lastName}
              required
            /><br/><br/>
</form>

<button class="btn btn-outline-secondary" onClick={handleSubmit}>
Continue
</button>

</div>

  )
}

export default Home