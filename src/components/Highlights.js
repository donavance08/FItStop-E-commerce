import {Row, Col, Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Highlights(){
	return(
		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card className="cardHighlight " >
					<Card.Body className="p-0" as={NavLink} to={"/products"}>
						<Card.Img variant="top" style={{height:"30vh"}} src="./images/strength.jpg" />
						{/*<Card.Title className="d-flex justify-content-center">
							<h2>Strength</h2>
						</Card.Title>
						<Card.Text>
							Increasing your <span>"Strength"</span> will make it easy to get fit, and here in FitStop, we can offer you a wide array of equipments to help you increase your strength in the fastest way possible. 
						</Card.Text>*/}
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body className="p-0" as={NavLink} to={"/products"}>
						<Card.Img variant="top" style={{height:"30vh"}} src="./images/endurance.jpg" />
						
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight">
					<Card.Body className="p-0" as={NavLink} to={"/products"}>
						<Card.Img variant="top" style={{height:"30vh"}} src="./images/flexibility.jpg" />
						
					</Card.Body>
				</Card>
			</Col>
		</Row>
		)
}