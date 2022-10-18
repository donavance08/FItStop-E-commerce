import CourseCard from '../components/CourseCard'
import courses_data from '../data/courses'

export default function Courses(){
	const courses = courses_data.map(course => {
		return (
			<CourseCard key={course.id} course={course}/>
		)
	})

	return (
		<>
			{courses}			
		</>
	)
}