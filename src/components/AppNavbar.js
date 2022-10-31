import { Col, Dropdown, Navbar, Nav, Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'
import '../App.css'

export default function AppNavbar(){
	const { user } = useContext(UserContext)

	return (
		<Container className="px-0 mb-3">
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
				<Nav className="ms-auto" style={{color: "white"}}>
					<Nav.Link  className="navLinks" as={NavLink} to="/products" style={{color: "white"}}>Products</Nav.Link>

					{ (localStorage.token)?
							
						<>
							{user.accessType !== "vendor"?
								<>
									<Nav.Link className="navLinks" as={NavLink} to="/cart" style={{color: "white"}}>Cart</Nav.Link>
									<Dropdown>
									    <Dropdown.Toggle variant="dark" id="dropdown-basic">
									       Profile
									    </Dropdown.Toggle>

									    <Dropdown.Menu>
									    	<Dropdown.Item as={NavLink} to="/orders">Orders</Dropdown.Item>
									       <Dropdown.Item href="/logout">Logout</Dropdown.Item>
									    </Dropdown.Menu>
								    </Dropdown>
								</>
							:
								<>
									<Nav.Link  
										className="navLinks me-2" 
										as={NavLink} to="/vendor/product/add" 
										style={{color: "white"}}
									>Add</Nav.Link>
									<Dropdown>
									    <Dropdown.Toggle variant="dark" id="dropdown-basic">
									       Profile
									    </Dropdown.Toggle>

									    <Dropdown.Menu>
									       <Dropdown.Item href="/logout">Logout</Dropdown.Item>
									    </Dropdown.Menu>
								    </Dropdown>
								</>
							}


					    </>
					
					:
						<>
							<Nav.Link className="navLinks" as={NavLink} to="/login">Login</Nav.Link>
							<Nav.Link className="navLinks" as={NavLink} to="/register">Register</Nav.Link>
						</>
					}


				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</Col>
		</Container>
		
	)
}