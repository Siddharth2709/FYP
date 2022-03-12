import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import './step1.css'
import temp  from './temp.jpg' 
import temp2  from './temp.jpg' 
import temp3  from './temp.jpg' 
import { ButtonGroup, Button } from "reactstrap";
import arts from '../../../assets/arts.gif'
import science from '../../../assets/science.gif'
import commerce from '../../../assets/commerce.png'
import '../../Home/assets/css/style.css'
const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
    <div class=" text-center" style={{paddingTop:'40px'}}>
      <h3>Choose Your Stream</h3>
      </div>
      <FormGroup>
        {/* <Label for="email">Select your current stream of study </Label> */}
        <div className="row">
        <div class="col-md-4 " data-aos="zoom-in" data-aos-delay="200">
        <div class="button">
    <input type="radio" name="email"  value='a' id="a" // Prop: The email input data
          onChange={props.handleChange}/>
      
    <label for="a"><img src={science} alt=''/></label>
    </div>
</div>
<div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
<div class="button">
    <input type="radio" name="email" value="b" id="b" 
     onChange={props.handleChange}/>
    <label for="b"><img src={science} alt=''/></label>
</div>
</div>
<div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
<div class="button">
    <input type="radio" name="email" value="c" id="c" 
     onChange={props.handleChange}/>
    <label for="c"><img src={science} alt=''/></label>
</div>
</div>
 {/* <div className='col-md-12 text-center' style={{paddingTop:'30px'}}>
    <label style={{paddingRight:'10px', fontWeight:'500'}}> No of hours studied</label>
    <input type='number' name ='hrs' value ={props.getHrs} onChange={props.handleChange}></input>
    </div> */}
    </div>
      </FormGroup>
    </>
  );
};

export default Step1;
