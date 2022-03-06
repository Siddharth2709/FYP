import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <p>We recommend answering these questions to help us predict better!</p>
      <FormGroup>
        {/* <Label for="password">Password</Label> */}
        {props.questions.map((sub,index) => {
            console.log('here', sub,index);
            return <div>
              <label> {sub}</label>
              <Input type = 'number' name= {sub} value = {props.getMarks}  min='0' max='100'  onChange={props.handleChange}/>
              
            </div>
        })} 
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </>
  );
};

export default Step3;
