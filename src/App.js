import './App.css';
import AppNavbar from './components/AppNavbar'
// import Home from './pages/Home'
// import Courses from  './pages/Courses'
// import Register from './pages/Register'
import Login from './pages/Login'
import { Container } from 'react-bootstrap'


function App() { // function name should be the same as the fileName
  return (
    <>
      <AppNavbar/>
      <Container>
{/*        <Home/>
        <Courses/>
        <Register/>*/}
        <Login/>
      </Container>

    </>

  );
}

export default App;
