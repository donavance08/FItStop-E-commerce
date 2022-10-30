import AddToCart from '../common functions/AddToCart'
import {Form, Button, Container} from 'react-bootstrap'
import {useState, useEffect, useContext} from 'react'
import {useNavigate, Navigate, useParams} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'
import Loading from '../components/Loading'

export default function Login(){
	const {fromPage, id} = useParams()

	const {user, setUser} = useContext(UserContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	
	/*Initialize useNavigate*/
	const navigate = useNavigate()

	const [isActive, setIsActive] = useState(false)

	const retrieveUser = (token) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/account/details`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})	
		.then(response => response.json())
		.then(result => {
			setUser({
				id: result._id,
				isAdmin: result.isAdmin,
				email: result.email
			})

	
		});
	};


	function authenticate(event){
		event.preventDefault()

		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json())
		.then(result => {
			if(typeof result.accessToken !== "undefined"){
				localStorage.setItem('token', result.accessToken)
				retrieveUser(result.accessToken)

				if(fromPage === "productView" && id){
					AddToCart(id, "hello")
					navigate(`/products/${id}`, {replace:true})
						
				} else if (fromPage && id){
					AddToCart(id, "hello")
					navigate(`/${fromPage}`, {replace:true})
				} else {

					Swal.fire({
						title: 'Login Successful!',
						icon: 'success',
						text: 'Welcome to FitStop!'
					})

					navigate(`/`, {replace:true})
				}

			} else{
				Swal.fire({
					title: 'Authentication Failed!',
					icon: 'error',
					text: 'Please try again!'
				})
			}

			setIsLoading(false)
		})
	}

	useEffect(() => {
		if(email !=="" && password !==""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password])

	return (
		isLoading?
			<Loading/>
		:
			(user.id !== null)?
				<Navigate to={`/${fromPage}`}/>
			:
			<Container className="col-md-7 col-lg-5">	
				<Form onSubmit={event => authenticate(event)} >
					<Form.Group controlId="userEmail" className="mt-2">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email" 
							placeholder="JohnDoe@email.com"  
							value={email} 
							onChange={event => setEmail(event.target.value)}
							required 
						/>
					</Form.Group>

					<Form.Group controlId="password" className="mt-2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required 
							type="password" 
							placeholder="Password"
							value={password} 
							onChange={event => setPassword(event.target.value)}
						/>
					</Form.Group>
					<Container className="mt-2 d-flex justify-content-center">	
						{	isActive? 
							<Button variant="danger" type="submit" id="submitBtn">
								Submit
							</Button>
							:
							<Button disabled variant="secondary" type="submit" id="submitBtn" >
								Submit
							</Button>
						}	  
					</Container>              
				</Form>	
			</Container>
	);
};