import './App.css';
import { useState } from 'react'
import { UserProvider } from './UserContext'
import AppNavbar from './components/AppNavbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Products from  './pages/Products'
import ProductView from './components/ProductView'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import { CarouselItem, Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

function App() { // function name should be the same as the fileName
  const [user, setUser] = useState({
    id: localStorage.getItem('id')
  })

  console.log(user.id);
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
              <Route path="/products" element={<Products/>}/>
              <Route path="/products/:productId" element={<ProductView/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/cart" element={user.id? <Cart/> : <Navigate to="/login"/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </Container>

        </Router>
      </UserProvider>

    </>

  );
}

export default App;
