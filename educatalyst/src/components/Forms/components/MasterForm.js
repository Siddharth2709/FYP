import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      stream : [false,false,false],
      email: "",
      username: "",
      password: "",
      marks :[0,0,0,0],
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleStream(event) {
    const indx = event.target.value
    console.log('###',indx)
    var list = [false,false,false]
    list[indx] = true;
    this.setState({
      email:indx,
      stream:list
    })
  }

  handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target;
    //console.log('%%%', name ,value)
    if (name ==='email'){
      if (value ==='a'){
        this.setState({
          [name]: value,
          stream: ['Physics', 'Chemistry', 'Maths', 'Bio']
        })
      }
      if (value ==='b'){
        this.setState({
          [name]: value,
          stream: ['Accounts', 'Finance', 'Audits', 'Taxes']
        })
      }
      if (value ==='c'){
        this.setState({
          [name]: value,
          stream: ['History', 'Civics', 'Geography', 'Polity']
        })
      }
    }
    else{
    this.setState({
      [name]: value,
      stream: ['Physics', 'Chemistry', 'Maths']
    });
  }
console.log(this.state)}

  getMarks(e) {
    let marks_new = this.state.marks

    return marks_new[e.target.name]
  }
  handleMarks(e) {
    console.log('G8G')
   let  index = e.target.name
    let marks_new = this.state.marks
    marks_new[index]  = e.target.value
    this.setState({
      marks:marks_new
    })
    console.log('G8G',marks_new)
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button color="primary float-right">Submit</Button>;
    }
    // ...else render nothing
    return null;
  }

  get subjectList () {
    let sub = this.state.email
    if (sub === 'a'){
      this.state({
        stream: ['Physics', 'Chemistry', 'Maths']
      })
    }
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>Create an Account</CardHeader>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
                subjects = {this.state.stream}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
      </>
    );
  }
}

export default MasterForm;