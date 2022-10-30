import AddToCart from '../common functions/AddToCart'
import Loading from '../components/Loading'
import StarsRating from './StarsRating'
import Swal from 'sweetalert2'
import UserContext from '../UserContext'
import { useContext, useEffect, useState  } from 'react';
import { Button,Card, Col, Container, Row  } from 'react-bootstrap';
import { Link, useNavigate, useParams  } from 'react-router-dom'

export default function ProductView() {
	const {productId} = useParams();

	const {user} = useContext(UserContext);
	const navigate = useNavigate();

	const [description, setDescription] = useState("");
	const [imageLink, setImageLink] = useState("");
	const [isAvailable, setIsAvailable] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [stars, setStars] = useState(0);



	useEffect(() => {		

		setIsLoading(true)
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(response => response.json())
		.then(result => {	
					
			setName(result.product.name);
			setDescription(result.product.description);
			setPrice(result.product.price);
			setQuantity(result.product.quantity);
			setImageLink(result.product.imageLink);
			setStars(result.product.starsRating);

			setIsLoading(false)
		})

		if(quantity > 0) setIsAvailable(true)
	}, [quantity]);

	return(
		isLoading? 
			<Loading/>
		:
			<Container className="d-flex mt-5 col-md-10">
				<Row>
					<Col className="col-lg-5">
						<img 
						src={imageLink} 
						alt=""
						width="100%"
						/>

					</Col>
					<Col>
						<h2 className="productViewName">{name}</h2>	
						<StarsRating stars={stars}/>
						<h1>PHP {price.toLocaleString('en-US')}</h1>
						<h5>Description:</h5>
						<p>{description}</p>

						<Col className="me-auto">
							{isAvailable? 
								<span>In Stock</span>
							:
								<span>Out of Stock!</span>
							}
						</Col>

						<Col className="mt-3">
							{localStorage.token?
								<Button 
									disabled={!isAvailable}
									className="btn btn-primary" 									
									onClick={() => AddToCart(productId, name)}
								>
									ADD TO CART
								</Button>	
							: 
								<Button 
									disabled={!isAvailable}
									className="btn btn-primary " 
									onClick={() => navigate(`/login/productView/${productId}`)}
								>
									ADD TO CART
								</Button>	

							}
						</Col>
	
					</Col>
				</Row>
			</Container>
	);
};	