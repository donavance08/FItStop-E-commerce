import { Button, Col, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../UserContext'
import '../App.css'

export default function CartItem({product}){
	const { productId } = product;
	const {isUpdated, setIsUpdated} = useContext(UserContext)

	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(product.quantity);

	const [price, setPrice] = useState(0);
	const [subtotal, setSubtotal] = useState(product.subtotal);
	const [imageLink, setImageLink] = useState("")
	const [isAvailable, setIsAvailable] = useState(false)

	function changeQty(operator){

		fetch(`${process.env.REACT_APP_API_URL}/cart/${productId}/${operator}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.token}`
			}
		})
		.then(response => response.json())
		.then(result => {
			setSubtotal(result.subtotal)
			setQuantity(result.quantity)
			if(quantity === 0){
				deleteItem()
			}
			setIsUpdated(true)
		})
	}

	function deleteItem(){

		fetch(`${process.env.REACT_APP_API_URL}/cart/remove/${productId}/`, {
			method: "DELETE",
			headers: {
				"Content-Type" : "application/json",
				"Authorization": `Bearer ${localStorage.token}` 
			}
		})
		.then(response => response.json())
		.then(result => {
			setSubtotal(result.subtotal)
			setIsUpdated(true)
		});

	}

	useEffect(() => {

		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(response => response.json())
		.then(result => {
		
			setName(result.product.name);
			setPrice(result.product.price);
			setImageLink(result.product.imageLink)
			if(result.product.quantity > 0) setIsAvailable(true)

		});

		

	},[quantity, subtotal])

	return(
		subtotal > 0?
			<Row className="my-3 d-flex">
				<Col className="d-flex align-items-center m-auto">
				 	<div className="cartImgParent col-md-2 me-3 d-flex align-items-center">
				 	<img 
						src={imageLink} 
						alt=""
						width = "100%"
		
						/>

				 	</div>
				 	<Col className="me-auto">
				 		<p className="productName2">{name}</p>
				 	
				 		{isAvailable? 
				 			<span className="productName" style={{color: "green"}}>In Stock</span>
				 		:
				 			<span className="productName" style={{color: "green"}}>Out of Stock!</span>
				 		}
						<Col className="d-flex align-items-center mt-2">
							<p className="my-auto me-2">Qty</p>
							<Button className="squareButton d-flex align-items-center" onClick={() => changeQty("-")}>-</Button>
							<span className="mx-1">{quantity}</span>
							<Button className="squareButton d-flex align-items-center" onClick={() => changeQty("+")}>+</Button>
							<Button className="squareButton d-flex align-items-center" onClick={() => deleteItem()}> 
								<FontAwesomeIcon icon={faTrashCan} ></FontAwesomeIcon>
							</Button>
						</Col>


				 	</Col>

				</Col>
				<Col className="me-0 col-lg-1 d-flex flex-column">
					<p className="my-auto">Price:</p>
					{/*<p className="m-auto">Quantity:</p>*/}
					<p className="m-auto">Subtotal:</p>
				</Col>
				<Col className="col-lg-1 d-flex flex-column">
									
						<p className="my-auto ">{price.toLocaleString('en-US')}</p>
	{/*					<p className="my-auto">x{quantity}</p>*/}
						<p className="my-auto">{subtotal.toLocaleString('en-US')}</p>
					
				</Col>
			</Row>
		:
		
			<>
			</>	
	)
}
