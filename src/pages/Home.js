import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import Courses from '../components/Courses'

export default function Home(){
	return (
		<>
		    <Banner/>
        	<Highlights/>
        	{/*
				ACTIVITY
				1. Create a 'Courses' component with a bootstrap card inside of it
				2. The courses component must have a title, description, price, and button to enroll
				3. import the courses component to the Home.js file and successfully display it upon page reload
        	*/}
        	<Courses/>
		</>
	)


}