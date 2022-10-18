import {Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'

export default function Login(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isActive, setIsActive] = useState(false)

	// // ** Testing purposes*
	// // console.log(email);
	// // console.log(password1);
	// // console.log(password2);

	function loginUser(event){
		event.preventDefault()

		// Field cleaner
		setEmail("")
		setPassword("")

		alert("You are logged in!")

	}

	useEffect(() => {
		if(email !=="" && password !==""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password])

	return (
		<Form onSubmit={event => loginUser(event)} >
			<Form.Group controlId="userEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type="email" 
					placeholder="JohnDoe@email.com"  
					value={email} 
					onChange={event => setEmail(event.target.value)}
					required 
				/>
			</Form.Group>

			<Form.Group controlId="password">
				<Form.Label>Password</Form.Label>
				<Form.Control
					required 
					type="password" 
					placeholder="Password"
					value={password} 
					onChange={event => setPassword(event.target.value)}
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