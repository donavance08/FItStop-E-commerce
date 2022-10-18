import {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import PropTypes from 'prop-types'

export default function CourseCard({course}){ //destructured props content to course
	// further destructured each component of the course object
	const {name, description, price} = course

	// Using the state
	// initialize a 'count' state with a value of zero(0)
	const [count, setCount] = useState(0)
	const [seats, setSeat] = useState(15)

	function enroll(){
		if(seats > 0) {
			setCount(count + 1);
			setSeat(seats -1);
			return
		}

		alert("Course is fully booked!")

	}

	return (
		<Card> 
		  <Card.Body>
		    <Card.Title>{name}</Card.Title>
		    <Card.Text>{description}</Card.Text>
		    <Card.Subtitle>Price</Card.Subtitle>
		    <Card.Text>PHP {price}</Card.Text>
		    <Card.Text>Enrollees: {count}</Card.Text>
		    <Card.Text>Seats Available: {seats}</Card.Text>
		    <Button variant="primary" onClick={enroll}>Enroll Now!</Button>
		    
		  </Card.Body>
		</Card>
	)  
}

// Prop types can be used to validate data being used for props
CourseCard.propTypes = {
	course: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})

}