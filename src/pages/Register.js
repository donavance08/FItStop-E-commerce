import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import {useEffect} from 'react'


export default function Register(){
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [isActive, setIsActive] = useState(false)

	// ** Testing purposes*
	// console.log(email);
	// console.log(password1);
	// console.log(password2);
	function registerUser(event){
		event.preventDefault()

		// Field cleaner
		setEmail("")
		setPassword1("")
		setPassword2("")

		alert("You have successfully registered!")

	}

	useEffect(() => {
		if((email !=="" && password1 !=="" && password2 !=="") 
		&& (password1 === password2)){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password1, password2])

	return (
		<Form onSubmit={event => registerUser(event)}>
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
}