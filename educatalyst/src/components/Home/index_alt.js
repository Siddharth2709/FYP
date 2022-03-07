import React from 'react'
import './assets/css/style.css'
import {FcLineChart} from 'react-icons/fc'
import {GiMuscleUp} from 'react-icons/gi'
import {GiPlantSeed} from 'react-icons/gi'
import {GiMountainRoad} from 'react-icons/gi'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { useEffect } from 'react/cjs/react.production.min'
import Home from './index'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
       <Home/>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}


const Hero = () => {
  

  return (
    <>
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="index.html">Educatalyst</a></h1>
     
       <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
        
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
      <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Helping Students Prepare Better</h1>
          <h2>Data Driven Insights That Just Works!</h2>
        </div>
      </div>
      <div class="text-center">
        <a href="/chooseStream" class="btn-get-started ">Get Started</a>
      
      </div>
      {/* <button className='btn-get-started' name='btn' onClick={handleSubmit}> Click</button> */}
      {/* { modal?
      <MyVerticallyCenteredModal
        show={modal}
        onHide={() => setModal(false)}
      />:<></>} */}
      <div class="row icon-boxes">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><FcLineChart/></div>
            <h4 class="title"><a href="">Predict Your  Marks</a></h4>
            <p class="description"> Infer your final test scores using statistics</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><GiMuscleUp/></div>
            <h4 class="title"><a href="">Study Better</a></h4>
            <p class="description">  Analyze your stregth and weakness. </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><GiPlantSeed /></div>
            <h4 class="title"><a href=""> Growth factor</a></h4>
            <p class="description">Build confidence for your next test</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><GiMountainRoad/></div>
            <h4 class="title"><a href=""> Stream Suggestion </a></h4>
            <p class="description">Make better decision using data insights </p>
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  )
}

export default Hero