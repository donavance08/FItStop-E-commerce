import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'
import AddToCart from '../common functions/AddToCart'

export default function CourseView() {
	const {productId} = useParams();

	const {user} = useContext(UserContext);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	// const addToCart = (productId) => {
	// 	fetch(`${process.env.REACT_APP_API_URL}/cart/add/${productId}`, {
	// 		method: 'PATCH',
	// 		headers: {
	// 			"Content-type": "application/json",
	// 			"Authorization": `Bearer ${localStorage.getItem('token')}`
	// 		},
	// 		body: JSON.stringify({
	// 			productId: productId
	// 		})
	// 	})
	// 	.then(response => response.json())
	// 	.then(result => {
	// 		if(result){
	// 			Swal.fire({
	// 				title: "Success",
	// 				icon: "success",
	// 				text: "You have addToCarted successfully!"
	// 			})

	// 			navigate('/products')

	// 		}else {
	// 			Swal.fire({
	// 				title: "Something went wrong",
	// 				icon: "error",
	// 				text: "Please try again :("
	// 			})
	// 		}

	// 	});
	// };

	useEffect(() => {		
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(response => response.json())
		.then(result => {	
					
			setName(result.product.name)
			setDescription(result.product.description)
			setPrice(result.product.price)
			setQuantity(result.product.quantity)
		})
	}, [productId]);

	return(
		<Container className="mt-5">
			<Row>
				<Col lg={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title  className="text-center">{name}</Card.Title>
							{/* <Card.Subtitle>Description:</Card.Subtitle> */}
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>PhP {price}</Card.Text>
							<Card.Subtitle>Items remaining:</Card.Subtitle>
							<Card.Text>{quantity} pcs</Card.Text>
							{/* { 	user.id !== null ? */}
									<Button variant="primary" onClick={() => AddToCart(productId, name)}>add to cart </Button>
								 {/* : */}
									{/* <Link className="btn btn-danger btn-block" to="/login">add to cart</Link> */}
							{/* } */}
							
						</Card.Body>		
					</Card>
				</Col>
			</Row>
		</Container>
	)
}	