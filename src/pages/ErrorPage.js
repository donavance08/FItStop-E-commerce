import { Navigate, useNavigate} from 'react-router-dom'
import { Button, Row } from 'react-bootstrap'

function navigateToHome(navigate){
	navigate('/')
}

export default function ErrorPage(){
	const navigate = useNavigate()

	return (
		<>
           <Row className="fullPage d-flex align-items-center ">
           	<div className="m-auto justify-content-center">
           		<div className="d-flex">
           				<h2 className="pageHeader m-auto">Page not found!</h2>
           		</div>
           		<div className="d-flex justify-content-center mt-2">
	           		<Button className="btn-primary" onClick={() => navigateToHome(navigate)} >Home</Button>
	           	</div>
           	</div>
           </Row>

		</>
	)
}