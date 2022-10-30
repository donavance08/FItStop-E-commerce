import { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function AddProductView(){

	const [brandName, setBrandName] = useState('')
	const [category, setCategory] = useState([])
	const [description, setDescription] = useState('')
	const [imageLink, setImageLink] = useState('')
	const [manufacturer, setManufacturer] = useState('')
	const [name, setName] = useState('')
	const [price, setPrice] = useState(0)
	const [quantity, setQuantity] = useState(0)
	

	function addProduct(event){
		event.preventDefault()

		fetch(`${process.env.REACT_APP_API_URL}/vendor/products/add`, {
			method: "POST",
			headers: {
				"Content-type": 'application/json',
				Authorization: `Bearer ${localStorage.token}`
			},
			body: JSON.stringify({
				brandName: brandName,
				category: category,
				description: description,
				imageLink: imageLink,
				manufacturer: manufacturer,
				name: name,
				price: price,
				quantity: quantity
			})
		})
		.then(response => response.json())
		.then(result => {
			if(result.success){
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Your product has been added successfully!'
				})
			} else {
				Swal.fire({
					title: 'Failed',
					icon: 'error',
					text: 'We were unable to add your product!'
				})
			}
		})
	
	}

	return (
		<>
			<h2 className ="d-flex m-auto justify-content-center pageHeader ">Add a Product</h2>
			<Row>
				<Form onSubmit={event => addProduct(event)
				}>
					<Form.Group controlId="name" className="mt-2">
						<Form.Label>Name: </Form.Label>
						<Form.Control
							type="text" 
							value={name} 
							onChange={event => setName(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="description" className="mt-2">
						<Form.Label>Description:</Form.Label>
						<Form.Control
							type="text" 
							value={description} 
							onChange={event => setDescription(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="price" className="mt-2">
						<Form.Label>Price:</Form.Label>
						<Form.Control
							type="number" 
							value={price} 
							onChange={event => setPrice(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="quantity" className="mt-2">
						<Form.Label>Quantity:</Form.Label>
						<Form.Control
							type="number" 
							value={quantity} 
							onChange={event => setQuantity(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="brandName" className="mt-2">
						<Form.Label>Brand Name:</Form.Label>
						<Form.Control
							type="text" 
							value={brandName} 
							onChange={event => setBrandName(event.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="manufacturer" className="mt-2">
						<Form.Label>Manufacturer: </Form.Label>
						<Form.Control	 
							type="text" 
							value={manufacturer} 
							onChange={event => setManufacturer(event.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="imageLink" className="mt-2">
						<Form.Label>Product Image Link: </Form.Label>
						<Form.Control
							required
							type="text" 
							value={imageLink} 
							onChange={event => setImageLink(event.target.value)}
						/>
					</Form.Group>
					<Button className="btn btn-primary d-flex justify-content-center mx-auto mt-3 col-1" 
						type="submit" 
						id="submitBtn"
					>
						Submit
					</Button>
				</Form>	
			</Row>
		</>
	)
}