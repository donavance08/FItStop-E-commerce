import {Form, Button, Container} from 'react-bootstrap'
import {useState} from 'react'
import {useEffect, useContext} from 'react'
import {useNavigate,Navigate} from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function Register(){

	const {user, setUser} = useContext(UserContext)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mobileNumber, setMobileNumber] = useState("")
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [isActive, setIsActive] = useState(false)

	const navigate = useNavigate()

	function registerUser(event){
		event.preventDefault()
		
		fetch(`${process.env.REACT_APP_API_URL}/users/check-email`,{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		})
		.then(response => response.json())
		.then(result =>{
			console.log(`result is ${result}`);
			
			if(result){
				Swal.fire({
					title: 'Oops',
					icon: 'error',
					text: 'Email already in use!'
				})

				return
			}

			fetch(`${process.env.REACT_APP_API_URL}/users/register`,{
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					firstName: firstName,
					lastName: lastName,
					mobileNo: mobileNumber, 
					email: email,
					password: password1
				})
			})
			.then(response => response.json())
			.then(result => {
				console.log(`result is ${result}`);
				if(!result){
					Swal.fire({
						title: 'Oops',
						icon: 'error',
						text: 'Unknow error has occured. Registration failed!'
					})

					return
				}

				setFirstName("")
				setLastName("")
				setMobileNumber("")
				setEmail("")
				setPassword1("")
				setPassword2("")

				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Registration Successsful!'
				})

				navigate('/login')


			})

		})

	}

	useEffect(() => {
		if((firstName !=="" && lastName !=="" && mobileNumber.length === 11 &&email !=="" && password1 !=="" && password2 !=="") 
		&& (password1 === password2)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password1, password2, firstName, lastName, mobileNumber])
	
	return ( 
		
		(user.email !== undefined)?
			<Navigate to="/courses"/>
		:
			<Container className="col-md-7 col-lg-5">
				<Form onSubmit={event => registerUser(event)}>
					<Form.Group controlId="firstName" className="mt-2">
						<Form.Label>First Name:</Form.Label>
						<Form.Control
							type="text" 
							placeholder="John"  
							value={firstName} 
							onChange={event => setFirstName(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="lastName" className="mt-2">
						<Form.Label>Last Name:</Form.Label>
						<Form.Control
							type="text" 
							placeholder="Doe"  
							value={lastName} 
							onChange={event => setLastName(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="mobileNumber" className="mt-2">
						<Form.Label>Contact Number:</Form.Label>
						<Form.Control
							type="text" 
							placeholder="+631254585896"  
							value={mobileNumber} 
							onChange={event => setMobileNumber(event.target.value)}
							required 
						/>
					</Form.Group>
					<Form.Group controlId="userEmail" className="mt-2">
						<Form.Label>johndoe@email.com</Form.Label>
						<Form.Control
							type="email" 
							placeholder="Enter email"  
							value={email} 
							onChange={event => setEmail(event.target.value)}
							required 
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="password1" className="mt-2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							required 
							type="password" 
							placeholder="Password"
							value={password1} 
							onChange={event => setPassword1(event.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="password2" className="mt-2">
						<Form.Label>Verify Password</Form.Label>
						<Form.Control
							required 
							type="password" 
							placeholder="Verify Password" 
							value={password2} 
							onChange={event => setPassword2(event.target.value)}
						/>
					</Form.Group>
					<Container className="d-flex justify-content-center mt-2">	
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
	)	
}