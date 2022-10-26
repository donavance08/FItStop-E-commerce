import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react' 
import userEvent from '@testing-library/user-event'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import {useNavigate, Navigate} from 'react-router-dom'

function CheckoutConfirmation(props) {
	const navigate = useNavigate()
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Checkout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p>
          Are you sure you want to checkout?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>No</Button>
        <Button onClick={() => {
        	props.onHide()
        	checkout()
        	navigate("/")
        }}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}

function checkout(){
	fetch(`${process.env.REACT_APP_API_URL}/cart/checkout`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			}

	})
	.then(response => response.json())
	.then(result => {
			if(result.success){
					Swal.fire({
						title: 'Checkout Successful!',
						icon: 'success',
					})

			} else {
				Swal.fire({
					title: 'Checkout Failed!',
					icon: 'error',
				})
			}
	})
}

export default function Cart(){
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [modalShow, setModalShow] = useState(false)

	useEffect(() => {
        
		fetch(`${process.env.REACT_APP_API_URL}/cart`, {
			headers:{
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(response => response.json())
		.then(cart => {
			setTotal(cart.total)
           
            setProducts(
                cart.products.map(product => {
                    return (
                        <CartItem key={product._id} product={product}/>
                    )
                })
            )
		})
	},[])

    return(
            <>
            <Container className="col-lg-10">

            	  {products}
                <hr/>	
                <Row>
                	<Col></Col>
                	<Col md="auto" className="me-auto">Total:</Col>
                	<Col lg="1">{total}</Col>
                </Row>



                <Row>	
                	<Col className="ms-auto d-inline-block col-lg-2">	
        	         	<Button variant="primary" onClick={() => setModalShow(true)}>Checkout</Button>
                	</Col>
                </Row>
                
      			<CheckoutConfirmation
	        		show={modalShow}
	        		onHide={() => setModalShow(false)}
      			/>

            </Container>

                
            </>
    ) 
}