import './App.css';
import AppNavbar from './components/AppNavbar'
import Home from './pages/Home'
import Courses from  './pages/Courses'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() { // function name should be the same as the fileName
  return (
    <>
      <Router>
        <AppNavbar/>
        <Container>
         {/*Initializes that dynamic routing will be involved*/}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Container>

      </Router>

    </>

  );
}

export default App;
