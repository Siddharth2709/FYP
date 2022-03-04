import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <p>Enter the marks for test  </p>
      <FormGroup>
        <Label for="username">Username</Label>
        {props.subjects.map((sub,index) => {
            console.log('here', sub,index);
            return <div>
              <label> {sub}</label>
              <Input type = 'number' name= {sub} value = {props.getMarks}  min='0' max='100'  onChange={props.handleChange}/>
              
            </div>
        })}
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your Username"
          value={props.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step2;
