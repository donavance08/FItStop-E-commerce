import { useState, useEffect, useContext } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function CourseView() {
	// gets the courseId from the URL of the router that this component is connected to.
	// '/courses/:courseId'
	const {courseId} = useParams();
	console.log(courseId);

	const {user} = useContext(UserContext);
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);

	const enroll = (courseId) => {
		fetch(`${process.env.REACT_APP_API_URL}/users/enroll`, {
			method: 'POST',
			headers: {
				"Content-type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				courseId: courseId,
				userId: user.id
			})
		})
		.then(response => response.json())
		.then(result => {
			if(result){
				Swal.fire({
					title: "Success",
					icon: "success",
					text: "You have enrolled successfully!"
				})

				navigate('/courses')

			}else {
				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again :("
				})
			}

		});
	};

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}`)
		.then(response => response.json())
		.then(result => {
			setName(result.name)
			setDescription(result.description)
			setPrice(result.price)
		})
	}, [courseId]);

	return(
		<Container className="mt-5">
			<Row>
				<Col lg={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body className="text-center">
							<Card.Title>{name}</Card.Title>
							<Card.Subtitle>Description:</Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<Card.Subtitle>Price:</Card.Subtitle>
							<Card.Text>PhP {price}</Card.Text>
							<Card.Subtitle>Class Schedule</Card.Subtitle>
							<Card.Text>8 am - 5 pm</Card.Text>
							{ 	user.id !== null ?
									<Button variant="primary" onClick={() => enroll(courseId)}>Enroll</Button>
								:
									<Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
							}
							
						</Card.Body>		
					</Card>
				</Col>
			</Row>
		</Container>
	)
}	