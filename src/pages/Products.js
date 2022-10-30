import ProductCard from '../components/ProductCard'
import { useEffect, useState } from 'react' 
import Loading from '../components/Loading'
import { Container, Row } from 'react-bootstrap'
import '../App.css';


export default function Products(){
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
 
	useEffect(() => {
		
		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/products/`)
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
	}, []);

	return (
				(isLoading)?
					<Loading/>
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

	);
}