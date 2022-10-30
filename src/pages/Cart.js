import CartItem from '../components/CartItem'
import { useEffect, useState } from 'react' 
import userEvent from '@testing-library/user-event'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'
import {useNavigate, Navigate} from 'react-router-dom'
import { UserProvider } from '../UserContext'

function CheckoutConfirmation(props) {
	const navigate = useNavigate()
  return (
    <Modal
      {...props}
      size="md"
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
        	checkout(navigate)
        }}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

function checkout(navigate){

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
					text: `Not enough ${result.name} in inventory`
				})
			}
	});

	navigate('/');

};

function navigateToProducts(navigate){
	navigate('/products');
};

export default function Cart(){
    const [products, setProducts] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [total, setTotal] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();



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
            
		});

		setIsUpdated(false)
	},[isUpdated]);

    return(

    	<UserProvider value={{isUpdated, setIsUpdated}}>
    		
    	{total > 0?
            <>

            <Container className="col-lg-10">
            	<h2 className="pageHeader">Shopping Cart</h2>
            	  {products}
                <hr/>	
                <Row>
                	<Col className="pe-0"></Col>
                	<Col md="auto" className="ms-auto me-auto">
                		<Row>Total:</Row>
                		<Row> 
                			<Button variant="primary" onClick={() => setModalShow(true)}>Checkout</Button>
                		</Row>
                		
                	</Col>
                	<Col lg="1">{total.toLocaleString('en-US')}</Col>
                </Row>



                <Row>	
                	<Col className="ms-auto d-inline-block col-lg-2">	
        	         	
                	</Col>
                </Row>
                
      			<CheckoutConfirmation
	        		show={modalShow}
	        		onHide={() => setModalShow(false)}
      			/>

            </Container>

                
            </>

           :

           <Row className="fullPage d-flex align-items-center ">
           	<div className="m-auto justify-content-center">
           		<div className="d-flex">
           				<h2 className="pageHeader m-auto">Your cart is currently empty!</h2>
           		</div>
           		<div className="d-flex justify-content-center mt-2">
	           		<Button className="btn-primary" onClick={() => navigateToProducts(navigate)} >Start Shopping</Button>
	           	</div>
           	</div>
           </Row>
         }
        	</UserProvider>
    ) 
}
