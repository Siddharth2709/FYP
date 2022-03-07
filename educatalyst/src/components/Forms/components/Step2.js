import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import '../../Home/assets/css/style.css'
const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

    function subjectList(testNo){
      return(
        <>
        {props.subjects.map((sub,index) => {
            // console.log('here', sub,index);
          
            return <div className='col-md-6'>
            
              <label> {sub}</label>
              <Input type = 'number' name= {testNo+sub} value = {props.getMarks}  min='0' max='100' default='20'  onChange={props.handleChange}/>
              
            </div>
        })}
        </>
      )
    }
  return (
    <>
      <p>Enter the marks for test  </p>
      <FormGroup>
        <div className='text-center'>
        <h1> Test 1</h1>
        </div>
        <div className='row' style={{paddingBottom:'40px'}}>
        {
        subjectList('1')
        
         }
         </div>
         <div className='text-center' >
          <h1> Test 2</h1></div>
         <div className="row" style={{paddingBottom:'40px'}}>
        {
        subjectList('2')
        
         }
         </div>
          <div className='text-center' >
          <h1> Test 3</h1></div>
          <div className='row' style={{paddingBottom:'40px'}}>
        {
        subjectList('3')
        
         }
         </div>
           <div className='text-center' >
          <h1> Test 4</h1></div>
          <div className='row' style={{paddingBottom:'40px'}}>
        {
        subjectList('4')
        
         }
         </div>
         
        <Label style={{fontWeight:'500'}}> Time remaining for Test </Label>
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


