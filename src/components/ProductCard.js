import { useContext, useState} from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import {  useNavigate} from 'react-router-dom'
import AddToCart from '../common functions/AddToCart'

import '../App.css';
import UserContext from '../UserContext'

export default function ProductCard(props){ 
	const {from, product} = props
	const {name, price, _id, imageLink} = product
	const {user} = useContext(UserContext)
	const [isAvailable] = useState(product.quantity > 0)
	const navigate = useNavigate()

	return (
		<Col md={4} lg={3} className="d-flex ">
			<Card className="flex-column mt-2 mx-2 px-0" style={styles.cardCnt}> 
				<Card.Img onClick={() => navigate(`/products/${_id}`)} className="cardImg" variant="top" margin="auto" src={imageLink} />
				<Card.Body className="d-flex flex-column">
					<Card.Text 
						width="100%"
						onClick={() => navigate(`/products/${_id}`)}
					>{name}</Card.Text>
					<Card.Text className="productPrice mt-auto mb-0">PHP {price.toLocaleString('en-US')}</Card.Text>
					
						<span>{isAvailable? "In stock" : "Out of stock!"}</span>
						<Button 
							disabled={!isAvailable}
							className="btn btn-primary d-flex align-items-center justify-content-center" 
							onClick={() => {
								localStorage.token? 
									user.accessType === "vendor"?
									navigate(`/vendor/product/edit/${_id}`)
									:
									AddToCart(_id, name,from)
								:
									navigate(`/login${from}/${_id}`)
							}}
						>

							{user.accessType === "vendor"? "EDIT" : "ADD TO CART" }
						</Button>	
				</Card.Body>
			</Card>		
		</Col>

	)  
}

const styles = {
	cardCnt: {
		 borderWidth: 0, 
		 shadowOffset: { height: 0, width: 0 },
		 shadowOpacity: 0,
		 shadowRadius: 0,
		 elevation: 0 
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