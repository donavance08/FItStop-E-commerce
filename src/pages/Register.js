import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import UserContext from '../UserContext'
import UserRegistration from '../components/UserRegistration'
import VendorRegistration from '../components/VendorRegistration'

export default function Register({type}){


	const {user} = useContext(UserContext)

	return ( 
		
		(user.email !== undefined)?
			<Navigate to="/home"/>
		:
			type==="vendor"?
				<>
					<VendorRegistration></VendorRegistration>
					<p className="d-flex mt-2 justify-content-center">Want to be a customer instead? 
						<a className="ms-1"href="/register"> Click here</a></p>
				</>
			:
				<>
					<UserRegistration></UserRegistration>
					<p className="d-flex mt-2 justify-content-center">Want to start selling with us? 
						<a className="ms-1"href="/register/vendor"> Click here</a></p>
				</>
	)	
}