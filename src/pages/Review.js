import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Review(){
	const { productId } = useParams()
	const [name, setName ] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)
	const [rating, setRating] = useState(5)
	const [review, setReview] = useState('')

	useEffect(()=> {
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`)
		.then(response => response.json())
		.then(result => {
			if(result.success){
				setName(result.product.name)
			
			} else {
				setIsSuccess(false)
			}
			
		})
	},[isSuccess])

	function submitReview(){
		console.log('review', review);
		fetch(`${process.env.REACT_APP_API_URL}/products/${productId}/review`, {
			method: "PATCH",
			headers: {
				"Content-type": 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				review: review,
				stars: rating
			})
		})
		.then(response => response.json())
		.then(result => {
			if(result.success){
				Swal.fire({
					title: "Success",
					icon: "success",
					text: `Thank you for your honest review!`

				})
			} else {
				Swal.fire({
					title: "Failed",
					icon: "error",
					text: "An unknown error has occured"
				})
			}
		})
	}

	return (
		<Container className="col-md-10 col-lg-6">

			<Row className="d-flex justify-content-center">
				<h1 className="d-flex justify-content-center">Add review</h1>
				<h3 className="d-flex justify-content-center">{name}</h3>

			</Row>
			<Row className="d-flex justify-content-end">
				<div className="d-inline-block col-3 me-auto">
					<Form.Group className="mb-3" controlId="formRating">
						<p className="mb-1">Rating: </p>
						<Form.Select 
							value={rating}
							required
							onChange={event => setRating(event.target.value)}>
						      <option value="5">5</option>
						      <option value="4">4</option>
						      <option value="3">3</option>
						      <option value="2">2</option>
						      <option value="1">1</option>
						</Form.Select>
					</Form.Group>

				</div>

			</Row>
			<Row>
				<Form.Group className="mb-3" controlId="formReview">
					<Form.Label> Write your review: </Form.Label>
					<Form.Control 
						as="textarea"
						type="text"
						value={review} 
						onChange={event => setReview(event.target.value)}
					 >
					</Form.Control>
				</Form.Group>

			</Row>
			<Row className="d-flex justify-content-end">
				<Col className="m-auto">
					<Button className="btn btn-primary" onClick={() => submitReview()}>Submit</Button>
				</Col>	
			</Row>
		</Container>

	)
}