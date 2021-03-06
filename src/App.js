
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Review from './Pages/Review/Review';
import Footer from './Pages/Sheard/Footer/Footer';
import Navber from './Pages/Sheard/Navbar/Navber';

function App() {
  return (
    <div >
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/contact' element={<Contact></Contact>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
