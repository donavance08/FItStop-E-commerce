import { Accordion, Col, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

export default function AccordionItems({order}){
	const{ orderId, totalPrice, purchasedOn, status } = order
	const [orderProducts, setOrderProducts] = useState([])

	useEffect(()=> {
		setOrderProducts(order.products.map(product => {
			return OrderProducts(product, order)
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

function OrderProducts(product, order){
	const { name, imageLink, price, quantity } = product
	return (
		<Row className="d-flex p-0 my-2">
			<Col className="col-sm-4 col-md-3 col-lg-2">
				<img className ="ordersImage" src={imageLink} alt=""/>
			</Col>
			<Col>
				<h3 className="orderTitle">{name}</h3>
				<Row className="">
					<p className="m-0">Price: PHP {price.toLocaleString('en-US')}</p>
					<p>Quantity: {quantity}</p>
				</Row>
			</Col>


		</Row>
	)
}