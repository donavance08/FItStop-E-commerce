import {Row, Col, Card} from 'react-bootstrap'

export default function Highlights(){
	return(
		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title className="d-flex justify-content-center">
							<h2>Easy</h2>
						</Card.Title>
						<Card.Text>
							All you need for an occasion, or a simple meal in a click of a button. No more searching for a recipe or missing an ingredient when shopping.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title className="d-flex justify-content-center">
							<h2>Cheap</h2>
						</Card.Title>
						<Card.Text>
							All ingredients will be exact with no wastage, therefore, no extra money spent on ingredients you will just throw away, or stash forever.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title className="d-flex justify-content-center">
							<h2>Fast</h2>
						</Card.Title>
						<Card.Text>
							No need to waste time looking for every ingredient. Plus, all deliveries are done within 30 min to ensure all are fresh.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		)
}