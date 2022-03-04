import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import './step1.css'
import temp  from './temp.jpg' 
import temp2  from './temp.jpg' 
import temp3  from './temp.jpg' 
import { ButtonGroup, Button } from "reactstrap";
const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <p>Choose Your Stream</p>
      <FormGroup>
        <Label for="email">Select your current stream of study </Label>
        <div class="button">
    <input type="radio" name="email"  value='a' id="a" // Prop: The email input data
          onChange={props.handleChange}/>
    <label for="a">a</label>
</div>
<div class="button">
    <input type="radio" name="email" value="b" id="b" 
     onChange={props.handleChange}/>
    <label for="b">b</label>
</div>
<div class="button">
    <input type="radio" name="email" value="c" id="c" 
     onChange={props.handleChange}/>
    <label for="c">c</label>
</div>
      </FormGroup>
    </>
  );
};

export default Step1;
