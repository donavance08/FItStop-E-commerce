import {Button, Card, Row, Col, Container} from 'react-bootstrap'

export default function Courses(){
	  return (
	  	<Container fluid="xl">
		  	<Row >
		  		<Col xs={12} md={6} xl={3} className="justify-content-center">
		  			<Card > 
		  			  <Card.Body>
		  			    <Card.Title>HTML</Card.Title>
		  			    <Card.Text>
		  			      HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for describing the contents and appearance of Web pages.
		  			    </Card.Text>
		  			    <div>
		  			    	<Button variant="primary">Enroll Now!</Button>
		  			    </div>
		  			    
		  			  </Card.Body>
		  			</Card>
		  		</Col>
		  		<Col xs={12} md={6}  xl={3} className="justify-content-center">
		  			<Card>
		  			  <Card.Body>
		  			    <Card.Title>Javascript</Card.Title>
		  			    <Card.Text>
		  			      JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well.
		  			    </Card.Text>
		  			    <Button variant="primary">Enroll Now!</Button>
		  			  </Card.Body>
		  			</Card>
		  		</Col>
		  		<Col xs={12} md={6}  xl={3} className="justify-content-center">
		  			<Card >
		  			  <Card.Body>
		  			    <Card.Title>Node Js</Card.Title>
		  			    <Card.Text>
		  			      Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
		  			    </Card.Text>
		  			    <Button variant="primary">Enroll Now!</Button>
		  			  </Card.Body>
		  			</Card>
		  		</Col>
		  		<Col xs={12} md={6} xl={3} className="justify-content-center">
		  			<Card>
		  			  <Card.Body>
		  			    <Card.Title>React</Card.Title>
		  			    <Card.Text>
		  			      React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
		  			    </Card.Text>
		  			    <Button variant="primary">Enroll Now!</Button>
		  			  </Card.Body>
		  			</Card>
		  		</Col>
			</Row>
		</Container>
	  );
}