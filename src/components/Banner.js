import{Button, Row, Col} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export default function Banner(){
	return (
		<Row>
			<Col className="p-5">
				<h1>Zuitt Coding Bootcamp</h1>
				<p>Opportunities for everyone, everywhere!</p>
				<Button as={NavLink} variant="primary" to="/courses">Enroll now!</Button>
			</Col>

		</Row>
	)
}