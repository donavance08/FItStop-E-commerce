import './App.css';
import { useState } from 'react'
import { UserProvider } from './UserContext'
import AppNavbar from './components/AppNavbar'
import AddProductView from './components/AddProductView'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from  './pages/Products'
import ProductView from './components/ProductView'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import EditProductView from './components/EditProductView'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() { // function name should be the same as the fileName
  const [user, setUser] = useState({
    id: localStorage.getItem('id'),
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
              <Route path="*" element={<ErrorPage/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={user.id? <Cart/> : <Login from="/cart"/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/login/:fromPage" element={<Login/>}/>
              <Route path="/login/:fromPage/:id" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="/orders" element={user.id? <Orders/> : <Login from="/orders"/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/products/:productId" element={<ProductView/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/register/vendor" element={<Register type="vendor"/>}/>
              <Route path="/vendor/product/edit/:id" element={<EditProductView/>}/>
              <Route path="/vendor/product/add" element={<AddProductView/>}/>
              </Routes>
          </Container>
        </Router>
      </UserProvider>

    </>

  );
}

export default App;
