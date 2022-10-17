import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavbar(){
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">Zuitt</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#courses">Courses</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}