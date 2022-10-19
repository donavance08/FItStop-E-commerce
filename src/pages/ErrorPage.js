import { Link} from 'react-router-dom'

export default function ErrorPage(){
	return (
		<>
			<h1>Oops</h1>
			<p>That page was not found :(</p>
			<Link to="/">Go back to home</Link>
		</>
	)
}