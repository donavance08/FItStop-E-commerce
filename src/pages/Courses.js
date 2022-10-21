import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react' 
import Loading from '../components/Loading'


export default function Courses(){
	console.log(localStorage);
	const [courses, setCourses] = useState([]);
	const [isLoading, setIsLoading] = useState(false)
 
	useEffect(() => {

		setIsLoading(true)

		fetch(`${process.env.REACT_APP_API_URL}/courses/`)
		.then(response => response.json())
		.then(result => {
			setCourses(
				result.map(course => {
					return (
						<CourseCard key={course._id} course={course}/>
					)
				})
			)

			setIsLoading(false)
		});
	}, []);


	return (
				(isLoading)?
					<Loading/>
				:
					<>
						{courses}	
					</>

	);
}