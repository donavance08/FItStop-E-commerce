import './App.css';
import { useState } from 'react'
import { UserProvider } from './UserContext'
import AppNavbar from './components/AppNavbar'
import Home from './pages/Home'
import Courses from  './pages/Courses'
import CourseView from './components/CourseView'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() { // function name should be the same as the fileName
  const [user, setUser] = useState({
    id: localStorage.getItem('id')
  })

  const unsetUser = () => {
    localStorage.clear()
  }


  return (
    <>
      {/*Provides the user context throughout any component inside of it*/}
      <UserProvider value={{user, setUser, unsetUser}}>
      {/*Initializes that dynamic routing will be involved*/}
        <Router>
          <AppNavbar/>
          <Container>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/courses" element={<Courses/>}/>
              <Route path="/courses/:courseId" element={<CourseView/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Container>

        </Router>
      </UserProvider>

    </>

  );
}

export default App;
