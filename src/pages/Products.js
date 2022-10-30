import ProductCard from '../components/ProductCard'
import { useContext, useEffect, useState } from 'react' 
import UserContext from '../UserContext'
import Loading from '../components/Loading'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../App.css';


export default function Products(){
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
	const { user } = useContext(UserContext)
 	const navigate = useNavigate()

	useEffect(() => {
		
		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/${user.accessType === "vendor"? "vendor/" : ""}products/`,{
			headers: {
				"Content-type": 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			setProducts(
				result.map(product => {
					return (
						<ProductCard key={product._id} product={product} from="/products"/>
					)
				})
			)

			setIsLoading(false)
		});
	}, [user.accessType]);

	function navigateToAddProduct(navigate){
		navigate('/vendor/product/add')
	}

	return (
				(isLoading)?
					<Loading/>
				:
					<>
					{products.length === 0?
				        <Row className="fullPage d-flex align-items-center ">
				           	<div className="m-auto justify-content-center">
				           		<div className="d-flex">
				           				<h2 className="pageHeader m-auto">Your store is empty</h2>
				           		</div>
				           		<div className="d-flex justify-content-center mt-2">
					           		<Button 
					           			className="btn-primary" 
					           			onClick={() => navigateToAddProduct(navigate)} 
					           		>Start Selling</Button>
					           	</div>
				           	</div>
				        </Row>
					:
						<>
							<Container className="col-10 d-flex flex-column">
								<Row className="my-1" >
								{/* <Row> */}
									{products}
								{/* </Row> */}
									
								</Row>	
							</Container>
						</>
					}
					</>


	);
}