import { Accordion, Button,  Col, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AccordionItems({order}){
	const{ orderId, totalPrice, purchasedOn, status } = order
	const [orderProducts, setOrderProducts] = useState([])
	const navigate = useNavigate()

	useEffect(()=> {
		setOrderProducts(order.products.map(product => {
			return OrderProducts(product, order, navigate)
			})
		)
	}, [])

	return(
		<Accordion.Item eventKey={orderId}>
		  <Accordion.Header>{orderId}</Accordion.Header>
		  <Accordion.Body>
		  		{orderProducts}
		  		<hr/>
		  		<h4>Total: PHP {totalPrice.toLocaleString('en-US')}</h4>
		  		<p className="m-0">Date of purchase: {purchasedOn}</p>
		  		<p>Status: {status}</p>
		  </Accordion.Body>
		</Accordion.Item>
	)

}

function OrderProducts(product, order, navigate){

	const { name, imageLink, price, productId, quantity } = product
	return (
		<Row className="d-flex p-0 my-2">
			<Col className="col-sm-4 col-md-3 col-lg-2">
				<img className ="ordersImage" src={imageLink} alt=""/>
			</Col>
			<Col >
				<h3 className="pageTitle">{name}</h3>
				<Row >
					<p className="m-0">Price: PHP {price.toLocaleString('en-US')}</p>
					<p>Quantity: {quantity}</p>
					
				</Row>
				<Row className="d-inline-block">
					<Button 
						className="btn btn-primary addReviewButton"
						onClick={()=> navigate(`/review/${productId}/add`)}
					>Add a review</Button>	
				</Row>
			</Col>
		</Row>
	)
}