import {useState, useEffect} from 'react'
import {Button, Card} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CourseCard({course}){ //destructured props content to course
	// further destructured each component of the course object
	const {name, description, price, _id} = course

	// Using the state
	// First element is a var and second is a function to modify the var

	// initialize a 'count' state with a value of zero(0)
	const [count, setCount] = useState(0)
	const [seats, setSeat] = useState(15)
	const [isOpen, setIsOpen] = useState(true)

	function enroll(){
		if(seats > 0) {
			setCount(count + 1);
			setSeat(seats -1);
			return
		}

		alert("Course is fully booked!")

	}

	// Effects in React is just like side effects/effects where everytime something happens within the component, a function/condition runs. 
	// You may also listen or watch a specific state for changes instead of watching/listening to the whole component
	useEffect (() => {
		if(seats === 0){
			setIsOpen(false)
		}
	}, [seats])


	return (
		<Card> 
		  <Card.Body>
		    <Card.Title>{name}</Card.Title>
		    <Card.Text>{description}</Card.Text>
		    <Card.Subtitle>Price</Card.Subtitle>
		    <Card.Text>PHP {price}</Card.Text>
			<Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>		    
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