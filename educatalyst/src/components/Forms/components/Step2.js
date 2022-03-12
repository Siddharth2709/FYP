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
          
            return <> 
             <div className='text-center' style={{ paddingTop:'40px'}}>
        <h1> {sub}</h1>
        </div>
        
        <div className='row' style={{paddingBottom:'10px'}}>
        <div className='col-md-6'>
              <label>Test 1</label>
              <Input type = 'number' name= {'1'+sub} value = {props.getMarks}  min='0' max='100' default='20'  onChange={props.handleChange}/>
              
            </div>
       
       <div className='col-md-6'>
 
              <label>Test 2</label>
              <Input type = 'number' name= {'2'+sub} value = {props.getMarks}  min='0' max='100' default='20'  onChange={props.handleChange}/>
              
            
        </div>
        
        <div className='col-md-6'>
           
              <label>Test 3</label>
              <Input type = 'number' name= {'3'+sub} value = {props.getMarks}  min='0' max='100' default='20'  onChange={props.handleChange}/>
              
            </div>
          
            <div className='col-md-6'>
           
              <label>Test 4</label>
              <Input type = 'number' name= {'4'+sub} value = {props.getMarks}  min='0' max='100' default='20'  onChange={props.handleChange}/>
              
            </div>
            </div>
            <Label style={{fontWeight:'500'}}> Avg Time studied for each Test </Label>
        <Input
          type="text"
          name={sub + 'time_studied'}
          id="username"
          placeholder="No of hrs studied"
          value={props.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
          
        />
            </>
        })}
       
        </>
      )
    }
  return (
    <>
      <p>Enter the marks for each test  </p>
      <FormGroup>
        {/* <div className='text-center'>
        <h1> Test 1 </h1>
        </div>
        <div className='row' style={{paddingBottom:'40px'}}> */}
        {
        subjectList('1')
        
         }
         {/* </div> */}
         {/* <div className='text-center' >
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
         </div> */}
         <div className=" text-center"><Label style={{fontWeight:'600', paddingTop:'30px'} }> Time remaining for Test </Label></div>
          
        <Input
          type="text"
          name='time_left'
          id="username"
          placeholder="No of Days"
          value={props.username} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
          
        />
        
      </FormGroup>
    </>
  );
};

export default Step2;


