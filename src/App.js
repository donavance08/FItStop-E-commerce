import './App.css';
import AppNavbar from './components/AppNavbar'
import Home from './pages/Home'
import { Container } from 'react-bootstrap'



function App() { // function name should be the same as the fileName
  return (
    <>
      <AppNavbar/>
      <Container>
        <Home/>
      </Container>

    </>

  );
}

export default App;
