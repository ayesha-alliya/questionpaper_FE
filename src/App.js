
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addquestion from './Component/Addquestion';
import Admindash from './Component/Admindash';
import Downloadpdf from './Component/Downloadpdf';
import Home from './Component/Home';
import Login from './Component/Login';
import Memberdash from './Component/Memberdash';
import Memberprofile from './Component/Memberprofile';
import Papergenration from './Component/Papergenration';
import Registration from './Component/Registration';
import Subject from './Component/Subject';
import Updatepassword from './Component/Updatepassword';
import Course from './Component/Course';
import Approvemember from './Component/Approvemember';
import {ToastContainer,toast} from 'react-toastify'
import Postproblem from './Component/Postproblem';
import Solveproblem from './Component/Solveproblem';

function App() {
  return (
    <div>
    <BrowserRouter>
    <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>

          <Route path='/admin' element={<Admindash/>}>
            <Route path='course' element={<Course/>}/>
            <Route path='subject' element={<Subject/>}/>
            <Route path='approvemember' element={<Approvemember/>}/>
            <Route path='Solveproblem' element={<Solveproblem/>}/>
            <Route path='adminprofile' element={<Updatepassword/>}/>
          </Route>

          <Route path='/member' element={<Memberdash/>}>
          <Route path='question' element={<Addquestion/>}/>
            <Route path='paper' element={<Papergenration/>}/>
          <Route path='download' element={<Downloadpdf/>}/>
          <Route path='Postproblem' element={<Postproblem/>}/>
          <Route path='memberprofile' element={<Memberprofile/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
