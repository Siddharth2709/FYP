/*
 * This Multi-Step-Form was created using the tutorial found on CSS-Tricks.com
 * https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
 */

import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "../components/MasterForm";
import { Container, Row, Col } from "reactstrap";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Form() {
  return (
    <div className="App">
      
      <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Form
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
