import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react' 

export default function Courses(){
	const [courses, setCourses] = useState([]);

	useEffect(() => {
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
		});
	}, []);


	return (
		<>
			{courses}			
		</>
	);
}