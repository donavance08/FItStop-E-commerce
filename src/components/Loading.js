import { Container, Row, Spinner} from 'react-bootstrap'

export default function Loading(){
	return (
		<Container className="d-flex justify-content-center align-items-center" style={{height: "80vh"}}>
			<Row className="d-flex ">	
				<Spinner  animation="border" variant="primary" />
			</Row>	

		</Container>

	)
}
