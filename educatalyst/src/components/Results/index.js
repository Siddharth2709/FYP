import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import {CTable,CTableCaption, CTableBody, CTableDataCell,CTableRow, CTableHeaderCell,CTableHead } from '@coreui/react'
import { useEffect, useState } from 'react';
import '../Home/assets/css/style.css'
import CountUp from 'react-countup';
const UIDashboard = () => {
  const [name, setName] = useState('Joe Doe')
  const [detail, setDetail] = useState({})
  const [avgMarks, setAvgMarks] = useState([0,0,0,0])
  const [score,SetScores] = useState({})
  const [predicted,setPredicted] = useState([0,0,0,0])
  const [scatter1,setScatter1] = useState([0,0,0,0])
  const [scatter2,setScatter2] = useState([0,0,0,0])
  const [scatter3,setScatter3] = useState([0,0,0,0])
  const [scatter4,setScatter4] = useState([0,0,0,0])
  const [stream ,setStream] = useState(['','','',''])
  const [data,setData] = useState({'1':[],'2':[],'3':[],'4':[]})
  useEffect(()=>{
     let details = localStorage.getItem('details');
     console.log('%%%',details)
     let fname = localStorage.getItem('firstName')
     fname  = fname+' '+ localStorage.getItem('lastName')
     setName(fname)
     let dp = JSON.parse(details)
     setDetail(JSON.parse(details))
     console.log('empty?',detail)
     setDetail(dp)
     setStream(dp.stream)
     for(let i =0 ; i <4 ; i++ ){
      let avg_sub_0 = 0 
      let marks = dp.test_score
      for(let test in marks){
      avg_sub_0 = avg_sub_0+ parseInt(marks[test][i])}
      
       let avgs = avgMarks
       avgs[i] = avg_sub_0/4
       setAvgMarks(avgs)
       SetScores(marks)
      }
      setScatter1(dp.test_score[1])
      setScatter2(dp.test_score[2])
      setScatter3(dp.test_score[3])
      setScatter4(dp.test_score[4])
     console.log(avgMarks)
     for(let i =0; i<4; i++){
     let ms = avgMarks[i]
     let hrs = dp.hrs
     let per_sub = hrs/4
     let percentage_hrs = per_sub/735
     let growth_eff = ms/percentage_hrs
     let ideal_factor = 7.35
     let af = ideal_factor/growth_eff
     let gf = dp.username/af
     let scdf = 0 
     
     if (ms <30){
       scdf =2;
     } 
     else if(30 < ms && ms <40){
        scdf =2.5   
     }
     else if(40 <ms && ms <50){
       scdf =1.1
    }
    else if(50 <ms && ms <60){
       scdf =1.75
    }
    else if(60 <ms && ms <74){
       scdf =2.25
    }
    else if(75 <ms && ms <80){
       scdf =3
    }
    else if(80 <ms && ms <85){
       scdf =4
    }
    else if(85 <ms && ms <90){
       scdf =6
    }
    else if(90 <ms && ms <95){
       scdf =9
    }
    else  if(95 <ms && ms <100){
       scdf =14
    }
    let pim = gf/scdf
    let new_pred = predicted
    new_pred[i] = pim
    setPredicted(new_pred)}
    console.log(predicted)
     //getAvg()
         // do stuff here...
  }, [])
  const getAvg = () => {
    for(let i =0 ; i <4 ; i++ ){
      let avg_sub_0 = 0 
      let marks = detail.test_score
      for(let test in marks){
      avg_sub_0 = avg_sub_0+ parseInt(marks[test][i])}
      
       let avgs = avgMarks
       avgs[i] = avg_sub_0/4
       setAvgMarks(avgs)
      }
  }
  // useEffect(() => {
  //      console.log('updated again', detail)
  //      for(let i =0 ; i <4 ; i++ ){
  //       let avg_sub_0 = 0 
  //       let marks = detail.test_score
  //       for(let test in marks){
  //       avg_sub_0 = avg_sub_0+ parseInt(marks[test][i])}
        
  //        let avgs = avgMarks
  //        avgs[i] = avg_sub_0/4
  //        setAvgMarks(avgs)
  //       }
  // }, [detail])
  useEffect(() => {
    console.log('updated again avgmarks', avgMarks)
}, [avgMarks])
useEffect(() => {
  console.log('updated again', predicted)
}, [predicted])
  return (
      <>
         
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Results</h1>
         
        </div>
        <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row justify-content-end">

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={130}/>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={5}/>
              <p>Projects</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={10}/>
              <p>Years of experience</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={25}/>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>
      </div>
     
    <div>
    <section id="about-video" class="about-video">
      <div class="container" data-aos="fade-up">

        <div class="row">

         

          <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
          <CChart
  type="bar"
  data={{
    labels: detail.stream,
    datasets: [
      {
        label: 'Average Marks',
        backgroundColor: '#f87979',
        data: avgMarks,
      },
    ],
  }}
  labels="months"
/>
          </div>
        </div>

      </div>
    </section>
    <section id="about-video" class="about-video">
      <div class="container" data-aos="fade-up">

        <div class="row">

          <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
          <CChart
  type="line" 
  data={{
    labels: detail.stream,
    datasets: [
      {
        label: "test 1",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
       data: score[1]
        
      },
      {
        label: "test 2",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[2]
        
      },
      {
        label: "test 3",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[3]
        
      },
      {
        label: "test 4",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[4]
        
      },
    ],
  }}
/>
          </div>

          <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i class="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i class="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i class="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

        </div>

      </div>
    </section>
    
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          
          

         
          </div>
          
    </div>
      

    <div className='container'>
          <CChart
  type="scatter"
  data={{
    datasets: [{
      label: 'Test 1',
      data: [{
        x: 1,
        y: scatter1[0]
      }, {
        x: 2,
        y: scatter1[1]
      }, {
        x: 3,
        y: scatter1[2]
      }, {
        x: 4,
        y: scatter1[3]
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }
    ,
    {
      label: 'Test 2',
      data:[{
        x: 1,
        y: scatter2[0]
      }, {
        x: 2,
        y: scatter2[1]
      }, {
        x: 3,
        y: scatter2[2]
      }, {
        x: 4,
        y: scatter2[3]
      }],
      backgroundColor: 'rgb(255, 0, 255)'
    },
    {
      label: 'Test 3',
      data: [{
        x: 1,
        y: scatter3[0]
      }, {
        x: 2,
        y: scatter3[1]
      }, {
        x: 3,
        y: scatter3[2]
      }, {
        x: 4,
        y: scatter3[3]
      }],
      backgroundColor: 'rgb(0, 99, 0)'
    },
    {
      label: 'Test 4',
      data: [{
        x: 1,
        y: scatter4[0]
      }, {
        x: 2,
        y: scatter4[1]
      }, {
        x: 3,
        y: scatter4[2]
      }, {
        x: 4,
        y: scatter4[3]
      }],
      backgroundColor: 'rgb(0, 99, 0)'
    }
  ],
  }}
  options={{
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
      
    },
    pointRadius:7
  }}
/>
</div>   
</section>
<section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Call To Action</h3>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a class="cta-btn" href="#">Call To Action</a>
        </div>
      </div>
    </section>

<div>
  <div className='section-title text-center'><h2>Overveiw</h2></div>
<CTable color="teal" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Predicted Marks</CTableHeaderCell>

    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>{stream[0]}</CTableDataCell>
      <CTableDataCell>{predicted[0]}</CTableDataCell>
     
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>{stream[1]}</CTableDataCell>
      <CTableDataCell>{predicted[1]}</CTableDataCell>
     
    </CTableRow> <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>{stream[2]}</CTableDataCell>
      <CTableDataCell>{predicted[2]}</CTableDataCell>
     
    </CTableRow> <CTableRow>
      <CTableHeaderCell scope="row">4</CTableHeaderCell>
      <CTableDataCell>{stream[3]}</CTableDataCell>
      <CTableDataCell>{predicted[3]}</CTableDataCell>
     
    </CTableRow>
  </CTableBody>
</CTable>
    </div>
    </div>
    </>
  )
}

export default UIDashboard