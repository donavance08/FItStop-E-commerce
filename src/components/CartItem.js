import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

export default function CartItem({product}){
	const { productId, product_quantity } = product;

	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(0);
	const [price, setPrice] = useState(0);
	const [subtotal, setSubtotal] = useState(0);


	useEffect(() => {
		setQuantity(product.quantity);
		setSubtotal(product.subtotal)

		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(response => response.json())
		.then(result => {
		
			setName(result.product.name);
			setPrice(result.product.price);

		});


	},[])

	return(
		<Row className="mt-3 mb-3 d-flex">
			<Col className="d-flex align-items-center m-auto">
				<p>{name}</p>
			</Col>
			<Col className="ms-auto me-0 col-lg-1">
				<p>Price:</p>
				<p>Quantity:</p>
				<p>Subtotal:</p>
			</Col>
			<Col className="col-lg-1 d-flex flex-column">
								
						<p align="right" className="ms-auto me-5">{price}</p>
							<p className="ms-auto me-5">x{quantity}</p>
					<p className="ms-auto me-5">{subtotal}</p>
				
			</Col>
		</Row>
	)
}
