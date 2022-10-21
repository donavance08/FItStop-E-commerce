import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import UserContext from '../UserContext'

export default function AppNavbar(){
	const {user, setUser} = useContext(UserContext)

	return (
		<Navbar bg="light" expand="md" fluid > {/*className="fixed-top"*/} 
			<Navbar.Brand as={Link} to="/" className="ms-2">
				<img
					alt=""
					src="/logos/main.png"
					width="150"
					height="60"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2"/>
			<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end ">
				<Nav >
					<Nav.Link as={NavLink} to="/">Products</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Cart</Nav.Link>
					{ (user.id)?
						<Nav.Link as={NavLink} to="/logout">Profile</Nav.Link>
						:
						<>
							<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
							<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
						</>
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}