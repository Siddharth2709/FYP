import React from 'react'
import { CChart } from '@coreui/react-chartjs'
import {CTable,CTableCaption, CTableBody, CTableDataCell,CTableRow, CTableHeaderCell,CTableHead } from '@coreui/react'
import { useEffect, useState } from 'react';
import '../Home/assets/css/style.css'
import ScienceImg from '../../assets/science.jpg'
import ScienceAltImg from '../../assets/science_alt.jpg'
import CountUp from 'react-countup';
import CommerceImg from '../../assets/commerce.jpg'
import CommerceAltImg from '../../assets/commerce_alt.jpg'
import ArtsImg from '../../assets/arts.jpg'
import ArtsAltImg from '../../assets/arts_alt.jpg'
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
  const [minSub,setMinsub] = useState('')
  const [data,setData] = useState({'1':[],'2':[],'3':[],'4':[]})
  const [growthfactor,setGrowf]= useState(0)
  const [hrrem,setHrsrem] = useState(0)
  const [scaleDn, setScaleDN] = useState(0)
  const [perc,setPerc] = useState(0) 
  const [stream_matrix,setStream_matrix]= useState([])
  const [stream_other, setStreamOther] = useState([])
  const [stream_img_main, setImageM] = useState({})
  const [stream_img_other,setImageO] = useState({})
  
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
     let perc = 0
     for(let i =0 ; i <4 ; i++ ){
      let avg_sub_0 = 0 
      let marks = dp.test_score
      for(let test in marks){
      avg_sub_0 = avg_sub_0+ parseInt(marks[test][i])}
      
       let avgs = avgMarks
       avgs[i] = avg_sub_0/4
       perc = perc+ avg_sub_0/4
       setAvgMarks(avgs)
       SetScores(marks)
      }
      const min = Math.min(...avgMarks);
      const index = avgMarks.indexOf(min);
      console.log('MINNNN SUBB', stream[index])
      setMinsub(stream[index])
      setPerc(perc/400 *100)
      setScatter1(dp.test_score[1])
      setScatter2(dp.test_score[2])
      setScatter3(dp.test_score[3])
      setScatter4(dp.test_score[4])
     console.log(avgMarks)
     
    console.log('predicted',predicted)
    
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
    let details = localStorage.getItem('details');
    let dp = detail
    let subject_choosen = localStorage.getItem('sub')
    let survey  = JSON.parse(localStorage.getItem('survey_subjects'))
    const min = Math.min(...avgMarks);
      const index = avgMarks.indexOf(min);
      console.log('MINNNN SUBB', stream[index])
      setMinsub(stream[index])
    console.log(survey["Quality"])
    survey = survey['Quality']
    let pred_stream =[]
    let other_stream =[]
    // survey.subject_name ===0 for strongly agree 1 for nuetral and 2 for disagree
    if (subject_choosen ==='science'){
      setImageM(ScienceImg)
      setImageO(ScienceAltImg)
       pred_stream = ['Core Engineering Branches', 'Bachelor of Science']
  
     if(survey.maths ===0 && survey.bio ===0 && survey.chemistry ===0){
         pred_stream = ['biotechnology', 'genetic engineering', 'Bioinformatics']
    }
    else if(survey.maths ===0 && survey.physics ===0 && survey.chemistry ===0){
       pred_stream = ['Civil Engineering','Mechanical Engineering']
    }
    else if(survey.maths ===0 && survey.cs===0 && survey.electronic ===0){
       pred_stream = ['robotics', 'mechatronics', 'electronincs engineering']
    }
    else if(survey.maths ===0 && survey.bio ===0){
      pred_stream =['Genetic Engineering','biotechnology']
    }
   else  if (survey.maths === 2 && survey.bio ===0){
       pred_stream =['Medicines', 'MBBS','biotechnology']
    }
    else if (survey.cs ===0) {
       pred_stream = pred_stream.push(['Computer Science Engineering', 'Information Technology' ])
    }
    else if(survey.cs===0 || survey.physics===0 ||  survey.electronic===0){
       pred_stream = ['Electronics and Telecommunications']
    }
    // if(survey.cs===0 || survey.electronic===0){
    //    pred_stream = ['Electronics and Telecommunication']
    // }
    if(survey.maths ===2){
      other_stream = ['stream without math 1', 'stream without math 2','...']
    }
    else if(survey.bio ===2){
      other_stream = ['stream without bio 1', 'stream without bio 2','...']
    }
    else if(survey.cs ===2){
      other_stream = ['stream without cs', 'stream without cs 2']
    }
    else if(survey.physics ===2){
      other_stream = ['stream without physics', 'stream without physics 2']
    }
  }
  
  else if (subject_choosen ==='commerce'){
    //set images through here
    setImageM(CommerceImg)
      setImageO(CommerceAltImg)
       pred_stream = ['Bachelors of Business Administration', 'Bachelor of Science']
    //survey is object , set  use .subject name from 'Matrix js'
     if(survey.accounts ===0 && survey.taxes ===0 && survey.audits ===0){
         pred_stream = ['Chartered Accountant', 'Or other related', 'Accounts heavy subject']
    }
    else if(survey.business ===0 && survey.taxes ===0 && survey.finance ===0){
       pred_stream = ['Chartered Finance Accountant','or other streams', 'add here']
    }
    else if(survey.maths ===0 && survey.accounts===0 ){
       pred_stream = ['Portfolio manager', 'Risk Manager', 'or any number of field']
    }
    else if(survey.business ===0 && survey.finance ===0){
      pred_stream =['Integrated MBA+BBA','MBA']
    }
   else  if (survey.maths === 2 && survey.bio ===0){
       pred_stream =['Medicines', 'MBBS','biotechnology']
    }
    else if (survey.cs ===0) {
       pred_stream = pred_stream.push(['Computer Science Engineering', 'Information Technology' ])
    }
    else if(survey.cs===0 || survey.physics===0 ||  survey.electronic===0){
       pred_stream = ['Electronics and Telecommunications']
    }
    // if(survey.cs===0 || survey.electronic===0){
    //    pred_stream = ['Electronics and Telecommunication']
    // }
    if(survey.maths ===2){
      other_stream = ['stream without math 1', 'stream without math 2','...']
    }
    else if(survey.bio ===2){
      other_stream = ['stream without bio 1', 'stream without bio 2','...']
    }
    else if(survey.cs ===2){
      other_stream = ['stream without cs', 'stream without cs 2']
    }
    else if(survey.physics ===2){
      other_stream = ['stream without physics', 'stream without physics 2']
    }
  }
  else if (subject_choosen ==='arts'){
    setImageM(ArtsImg)
      setImageO(ArtsAltImg)
       pred_stream = ['Core Engineering Branches', 'Bachelor of Science']
  
     if(survey.maths ===0 && survey.bio ===0 && survey.chemistry ===0){
         pred_stream = ['biotechnology', 'genetic engineering', 'Bioinformatics']
    }
    else if(survey.maths ===0 && survey.physics ===0 && survey.chemistry ===0){
       pred_stream = ['Civil Engineering','Mechanical Engineering']
    }
    else if(survey.maths ===0 && survey.cs===0 && survey.electronic ===0){
       pred_stream = ['robotics', 'mechatronics', 'electronincs engineering']
    }
    else if(survey.maths ===0 && survey.bio ===0){
      pred_stream =['Genetic Engineering','biotechnology']
    }
   else  if (survey.maths === 2 && survey.bio ===0){
       pred_stream =['Medicines', 'MBBS','biotechnology']
    }
    else if (survey.cs ===0) {
       pred_stream = pred_stream.push(['Computer Science Engineering', 'Information Technology' ])
    }
    else if(survey.cs===0 || survey.physics===0 ||  survey.electronic===0){
       pred_stream = ['Electronics and Telecommunications']
    }
    // if(survey.cs===0 || survey.electronic===0){
    //    pred_stream = ['Electronics and Telecommunication']
    // }
    if(survey.maths ===2){
      other_stream = ['stream without math 1', 'stream without math 2','...']
    }
    else if(survey.bio ===2){
      other_stream = ['stream without bio 1', 'stream without bio 2','...']
    }
    else if(survey.cs ===2){
      other_stream = ['stream without cs', 'stream without cs 2']
    }
    else if(survey.physics ===2){
      other_stream = ['stream without physics', 'stream without physics 2']
    }
  }
  setStreamOther(other_stream)
  setStream_matrix(pred_stream)
  console.log('here',pred_stream)
    for(let i =0; i<4; i++){
      let ms = avgMarks[i]
      console.log('Average Marks',ms )
      let hrs = dp.hrs
      setHrsrem( dp.time_left)
      let sub = stream[i]+ 'time_studied'
      let hrs_per_sub = parseInt(dp[sub ])
      console.log(hrs_per_sub)
      let days_remaining = dp.time_left
      console.log(days_remaining)
      let hrs_rem = parseInt(days_remaining) *14
      console.log('hrs_rem', hrs_rem)
      let percentage_hrs = (hrs_per_sub/hrs_rem) * 100
       console.log('percentage_hrs',percentage_hrs)
      let growth_eff = ms/percentage_hrs
      console.log('growth_eff',growth_eff)
      let ideal_factor = 7.35
      let af = ideal_factor/growth_eff
      let gf = (hrs_per_sub/4)/af 
      setHrsrem((hrs_rem).toFixed(1))
      setGrowf(gf)
      let scdf = 0 
      
      if (ms <30){
        scdf =2;
      } 
      else if(30 < ms && ms <40){
         scdf =2.5   
      }
      else if(39 <ms && ms <50){
        scdf =1.1
     }
     else if(49 <ms && ms <60){
        scdf =1.75
     }
     else if(59 <ms && ms <75){
        scdf =2.25
     }
     else if(74 <ms && ms <80){
        scdf =3
     }
     else if(79 <ms && ms <85){
        scdf =4
     }
     else if(84 <ms && ms <90){
        scdf =6
     }
     else if(90 <ms && ms <95){
        scdf =9
     }
     else  if(95 <ms && ms <100){
        scdf =14
     }
     setScaleDN(scdf)
     let pim = gf/scdf
     let new_pred = predicted
     new_pred[i] = (pim+ms).toFixed(2)
     setPredicted(new_pred)}
}, [predicted,scaleDn,hrrem,avgMarks,minSub]);

useEffect(() => {
  console.log('updated again', predicted)
}, [predicted])
  return (
      <>
         <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="/">Educatalyst</a></h1>
     
      <a href="/" class="logo"><img src="../Home/assets/img/logo.png" alt="" class="img-fluid"/></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          
          <li><div > <a class='nav-link scrollto'>Signed In: {name}</a></div></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center">
          <h1>Results</h1>
         
        </div>
        <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row justify-content-end">

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={growthfactor}/>
              <p style={{paddingBottom:'10px'}}>Growth Factor  <span style={{fontSize:'10px'}}> Factor proportional to expected output</span></p>
             
            </div>
            
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={scaleDn}/>
              <p>Scale Down Factor <span style={{fontSize:'10px'}}> Negative Coefficient of performance. </span></p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={hrrem}/>
              <p>Effective Hours Remaining  <span style={{fontSize:'10px'}}> Calculated 14 hrs per day</span></p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
            <CountUp end={perc}/>
              <p>Percentage <span style={{fontSize:'10px'}}> Overall percentage % across all test</span></p>
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
            <h3>Analyze your strength and weakness</h3>
            <p class="fst-italic">
            If you too have 'Can do better' remarks on your report card. Follow these steps
            </p>
            <ul>
              <li><i class="bx bx-check-double"></i> 1. Discuss your doubts with teachers. </li>
              <li><i class="bx bx-check-double"></i> 2. Work on improving your weak areas. </li>
              <li><i class="bx bx-check-double"></i> 3. Choose a correct and organised strategy for studying</li>
             
            </ul>
            <p>
            Students need to work hard as well as smartly for getting good marks in their exams.Strategy should be adopting effective learning strategy and give their best performance. The tips and tricks mentioned here will be helpful for them to get good marks and get a level above average category if they utilise it effectively.
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
        borderColor: "rgba(245, 40, 145, 0.8)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
       data: score[1]
        
      },
      {
        label: "test 2",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(98, 209, 215, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[2]
        
      },
      {
        label: "test 3",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(72, 236, 142, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[3]
        
      },
      {
        label: "test 4",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(246, 160, 21, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
       data: score[4]
        
      },
    ],
  }}
/>
          </div>

          <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
            <h3>Track your performance in previous tests.</h3>
            <p class="fst-italic">
            Tracking students is essential, especially in modern times where students are behind and the race to catch up is on.
            </p>
            <ul>
              <li><i class="bx bx-check-double"></i> 1. Find precisely where individual students are in their learning against a set of learning intentions and success criteria</li>
              <li><i class="bx bx-check-double"></i> 2. Help students know what their next steps in learning are, which facilitates significant increases in their students’ achievements</li>
              </ul>
            <p>
            Tracking students also means you can quickly identify at risk. By monitoring all students you can ensure that no student ‘slips through the gap’. If any student requires extensions or additional support, these needs can be identified.
            </p>
          </div>

        </div>

      </div>
    </section>
    <div>
  <div className='section-title text-center' style={{paddingTop:'50px'}}><h2>Overveiw</h2></div>
  <div className='container'>
<CTable color="teal" striped>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Class</CTableHeaderCell>
      <CTableHeaderCell scope="col">Predicted Marks</CTableHeaderCell>

    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow color='info'>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>{stream[0]}</CTableDataCell>
      <CTableDataCell>{predicted[0]} </CTableDataCell>
     
    </CTableRow>
    <CTableRow >
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>{stream[1]}</CTableDataCell>
      <CTableDataCell>{predicted[1]} </CTableDataCell>
     
    </CTableRow> <CTableRow color='info'>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell>{stream[2]}</CTableDataCell>
      <CTableDataCell>{predicted[2]} </CTableDataCell>
     
    </CTableRow> <CTableRow>
      <CTableHeaderCell scope="row">4</CTableHeaderCell>
      <CTableDataCell>{stream[3]}</CTableDataCell>
      <CTableDataCell>{predicted[3]} </CTableDataCell>
     
    </CTableRow>
  </CTableBody>
</CTable>
</div>
    </div>
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Call To Action</h3>
          <p>You need to work more on <span className='strong'>{minSub.toUpperCase()}</span>. You have scored lowest in this subject</p>
         
        </div>
      </div>
    </section>
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Predicted Stream</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

         

          <div class="col-lg-6 col-md-6 mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="box featured">
              <h3 style={{fontSize:'20px'}}>Recommended</h3>
             <img src={stream_img_main} alt='science'></img>
              <ul style={{paddingTop:'20px'}}>
                { stream_matrix.map((obj,index) => {
                  return <li> <h5>{obj}</h5> </li>
                })}
              </ul>
              
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <h3 style={{fontSize:'20px'}}>Other Available Streams</h3>
              <img src={stream_img_other} alt='science'></img>
              <ul style={{paddingTop:'20px'}}>
              { stream_other.map((obj,index) => {
                  return <li> <h5>{obj}</h5> </li>
                })}
              </ul>
              
            </div>
          </div>

        </div>

      </div>
    </section>



    </div>
    </>
  )
}

export default UIDashboard