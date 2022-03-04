import './App.css';
import './components/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/index'
import ChooseStream from './components/ChooseStream/index';
import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <>
   <Router>
       <Routes>
         <Route  path='/' element={<Home/>}></Route>
         <Route path = '/chooseStream' element={<ChooseStream/>}></Route>
       </Routes>
   </Router>

   </>
  );
}

export default App;
