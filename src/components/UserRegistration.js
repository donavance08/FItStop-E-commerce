import Register from '../common functions/Register'
import { useEffect, useState } from 'react'
import { Container, Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function UserRegistration(){
	const navigate = useNavigate()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [mobileNumber, setMobileNumber] = useState("")
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		if((firstName !=="" && lastName !=="" && mobileNumber.length === 11 &&email !=="" && password1 !=="" && password2 !=="") 
		&& (password1 === password2)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password1, password2, firstName, lastName, mobileNumber])

	return (
		<Container className="col-md-7 col-lg-5">
				<Form onSubmit={event => {
					Register(event, firstName, lastName, mobileNumber, email, password1)
					setFirstName("")
					setLastName("")
					setMobileNumber("")
					setEmail("")
					setPassword1("")
					setPassword2("")
								navigate('/login')
					}
				}>
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
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email" 
							placeholder="johndoe@email.com"  
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
					<Container className="d-flex justify-content-center mt-3">	
						{	isActive? 
							<Button className="btn btn-primary" type="submit" id="submitBtn">
								Submit
							</Button>	
							:
							<Button disabled className="btn btn-primary" type="submit" id="submitBtn" >
								Submit
							</Button>	
						}
					</Container> 	                
				</Form>
			</Container>
	)
}
