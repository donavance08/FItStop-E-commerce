import {Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'

export default function Login(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	/*Initialize useNavigate*/
	const navigate = useNavigate()


	const [isActive, setIsActive] = useState(false)


	function authenticate(event){
		event.preventDefault()
		localStorage.setItem('email', email)

		setEmail('')
		setPassword('')

		navigate('/')
	}


	useEffect(() => {
		if(email !=="" && password !==""){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [email, password])

	return (
		<Form onSubmit={event => authenticate(event)} >
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