import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom'
import {useState} from 'react'




export default function AppNavbar(){

	const [user, setUser] = useState(localStorage.getItem('email'))

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/">Zuitt</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as={NavLink} to="/">Home</Nav.Link>
					<Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
					{ (user)?
						<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
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