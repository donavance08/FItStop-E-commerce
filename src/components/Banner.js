import{Button, Row, Col} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export default function Banner(){
	return (
		<Row>
			<Col className="p-5">
				<h1>Not just any grocery store</h1>
				<p>We want you to have all you need 1 click of a button, and we reward you for it!</p>
				<Button as={NavLink} variant="primary" to="/courses">Bundle up!</Button>
			</Col>

		</Row>
	)
}