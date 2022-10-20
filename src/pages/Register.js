import {Form, Button} from 'react-bootstrap'
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
			<Form onSubmit={event => registerUser(event)}>
			<Form.Group controlId="firstName">
				<Form.Label>First Name:</Form.Label>
				<Form.Control
					type="text" 
					placeholder="Enter first name"  
					value={firstName} 
					onChange={event => setFirstName(event.target.value)}
					required 
				/>
			</Form.Group>
			<Form.Group controlId="lastName">
				<Form.Label>Last Name:</Form.Label>
				<Form.Control
					type="text" 
					placeholder="Enter Last Name"  
					value={lastName} 
					onChange={event => setLastName(event.target.value)}
					required 
				/>
			</Form.Group>
			<Form.Group controlId="mobileNumber">
				<Form.Label>Contact Number:</Form.Label>
				<Form.Control
					type="text" 
					placeholder="+631254585896"  
					value={mobileNumber} 
					onChange={event => setMobileNumber(event.target.value)}
					required 
				/>
			</Form.Group>
			<Form.Group controlId="userEmail">
				<Form.Label>Email address</Form.Label>
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

			<Form.Group controlId="password1">
				<Form.Label>Password</Form.Label>
				<Form.Control
					required 
					type="password" 
					placeholder="Password"
					value={password1} 
					onChange={event => setPassword1(event.target.value)}
				/>
			</Form.Group>

			<Form.Group controlId="password2">
				<Form.Label>Verify Password</Form.Label>
				<Form.Control
					required 
					type="password" 
					placeholder="Verify Password" 
					value={password2} 
					onChange={event => setPassword2(event.target.value)}
				/>
			</Form.Group>
			{	isActive? 
				<Button variant="primary" type="submit" id="submitBtn">
					Submit
				</Button>	
				:
				<Button disabled variant="primary" type="submit" id="submitBtn" >
					Submit
				</Button>	
			}
		          	                
		</Form>

	)
	// )if(typeof user.email !== "undefined"){
	// 	return <Navigate to="/login"/>
	// } else if(){
		
	// } else {
	// 	return (
			
	// 	)
	// }
		
}