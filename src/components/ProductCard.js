import {useState, useEffect} from 'react'
import { Button, Card, Row, Col, Container} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link, useNavigate} from 'react-router-dom'
import '../App.css';
import AddToCart from '../common functions/AddToCart'


export default function ProductCard({product}){ //destructured props content to course
	// further destructured each component of the course object
	const {name, description, price, _id, imageLink} = product
	const navigate = useNavigate()
	// Using the state
	// First element is a var and second is a function to modify the var

	// initialize a 'count' state with a value of zero(0)
	const [count, setCount] = useState(0)
	const [seats, setSeat] = useState(15)
	const [isOpen, setIsOpen] = useState(true)

	// function enroll(){
	// 	if(seats > 0) {
	// 		setCount(count + 1);
	// 		setSeat(seats -1);
	// 		return
	// 	}

	// 	alert("Course is fully booked!")

	// }

	// Effects in React is just like side effects/effects where everytime something happens within the component, a function/condition runs. 
	// You may also listen or watch a specific state for changes instead of watching/listening to the whole component
	useEffect (() => {
		
	}, [seats])


	return (
			<Card className="mt-2 px-2 d-flex" style={styles.cardCnt}> 
				<Card.Img variant="top" src={imageLink} />
				<Card.Body className="d-flex flex-column">
					<a href={`/products/${_id}`} style={styles.productName}><Card.Text>{name}</Card.Text></a>
					<Card.Text className=" mt-auto">PHP {price}</Card.Text>
					<Button className="btn btn-tertiary" onClick={() => AddToCart(_id, name)}>ADD TO CART</Button>	
				</Card.Body>
			</Card>		
	)  
}

const styles = {
	cardCnt: {
		 borderWidth: 0, // Remove Border
 
		 shadowColor: 'rgba(0,0,0, 0.0)', // Remove Shadow for iOS
		 shadowOffset: { height: 0, width: 0 },
		 shadowOpacity: 0,
		 shadowRadius: 0,
		 
		 elevation: 0 // Remove Shadow for Android
   },
   productName: {
   	 textDecoration: "none",
   	 color: "black"
   }
 };

// Prop types can be used to validate data being used for props
ProductCard.propTypes = {
	course: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})

}