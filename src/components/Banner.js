import{Button, Row, Col} from 'react-bootstrap'
import {NavLink} from "react-router-dom"

export default function Banner(){
	return (
		<Row>
			<Col className="pt-3" style={{width: "100%", height:"60vh"}} >
			<a href="/products"><img as={NavLink} to="/courses" style={{width: "100%", height:"100%"}} src="./images/banner.jpg"/></a>
				
			</Col>

		</Row>
	)
}