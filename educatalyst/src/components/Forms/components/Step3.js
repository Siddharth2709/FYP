import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import SurveyComponent from './Matrix'
const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }
  
   
  return (
    <>
      <p>We recommend answering these questions to help us predict better!</p>
      <SurveyComponent ></SurveyComponent>

    </>
  );
};

export default Step3;
