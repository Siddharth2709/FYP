import './App.css';
import './components/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './components/Home/index_alt'
import ChooseStream from './components/ChooseStream/index';
import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import UIDashboard from './components/Results/index';

//code cleanup and testing begins
function App() {
  return (
   <>
   <Router>
       <Routes>
         <Route  exact path='/' element={<Hero/>}></Route>
         <Route exact path = '/chooseStream' element={<ChooseStream/>}></Route>
         <Route exact path = '/results' element = {<UIDashboard/>}></Route>
       </Routes>
   </Router>

   </>
  );
}

export default App;
