import { Col, Dropdown, Navbar, Nav, Container, NavDropdown, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'
import '../App.css'

export default function AppNavbar(){
	const {user, setUser} = useContext(UserContext)

	return (
		<Container>
		<Col className=""  >
			<Navbar expand="md" className="Navbar p-0" > {/*className="fixed-top"*/} 
				<Navbar.Brand as={Link} to="/" className="col-2" >
					<img 
						as={NavLink} 
						to="/"
						alt=""
						src="/logos/main.png"
						width="180"
						height="40"
						className="ms-4"
					/>
					
					
				</Navbar.Brand>	

			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav" className="me-5" >
				<Nav className="ms-auto">
					<Nav.Link  as={NavLink} to="/products" style={{color: "white"}}>Products</Nav.Link>

					{ (user.id)?
						<>
							<Nav.Link as={NavLink} to="/cart" style={{color: "white"}}>Cart</Nav.Link>
							<Dropdown>
							    <Dropdown.Toggle variant="dark" id="dropdown-basic">
							       Profile
							    </Dropdown.Toggle>

							    <Dropdown.Menu>
							       <Dropdown.Item href="/logout">Logout</Dropdown.Item>
							    </Dropdown.Menu>
						    </Dropdown>
						</>
					:
						<>
							<Nav.Link as={NavLink} to="/cart" style={{color: "white"}}>Cart</Nav.Link>
							<Nav.Link as={NavLink} to="/login" style={{color: "white"}}>Login</Nav.Link>
							<Nav.Link as={NavLink} to="/register" style={{color: "white"}}>Register</Nav.Link>
						</>
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</Col>
		</Container>
		
	)
}