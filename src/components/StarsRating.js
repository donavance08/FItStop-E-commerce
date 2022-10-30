import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'
import { Col, Row } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import '../App.css';


	function assignStar(value, starType, array){
		for(let i= 0 ; i < value ; i++){
			array.push(<FontAwesomeIcon key={Math.random()} className="starRating"  icon={starType}/>)	
		}
	}
export default function StarsRating({stars}){
	const [renderedStars, setRenderedStars] = useState([]);

	useEffect(() => {
		let starsArray = []
		const base = Math.floor(stars)
		const decimal = (stars - base).toFixed(2) 
		const diff = Math.floor(5-stars)
			
		assignStar(base, faStar, starsArray)	

		if(decimal >= 0.7){
			assignStar(1,  faStar, starsArray)
		} else if( decimal >= 0.3) {
			assignStar(1, faStarHalfStroke, starsArray)		
		}

		assignStar(diff, faStarEmpty, starsArray)	
		
		setRenderedStars(starsArray)

	},[stars])

	return (
		stars === 0?
			<span>no reviews yet</span>
		:
			<>
				<Col className="d-flex">
					{renderedStars}
				</Col>
			</>

	)
}

