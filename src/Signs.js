import React, {Component} from 'react';
import './Signs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Horoscope from './Horoscope'
import { Link, useParams } from 'react-router-dom';

export default class Signs extends Component {
	render(){
		const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]



		const signsDiv = signs.map((sign, index) => {

			const RendHoroscope = () => {
				let { day } = useParams();
				console.log(day)
				if (day !== undefined){
					return(
						<Horoscope sign={sign} day={day} />
					)
				} else {
					return(
						<Horoscope sign={sign} day="today" />
					)
				}
			}
			return (
				<div className="sign">
					<img className="sign-img mx-auto" alt="sign" src={`https://www.horoscope.com/images-US/signs/${sign.toLowerCase()}.png`} />
					<h2 className="text-center">{sign}</h2>
					<RendHoroscope  />
				</div>
			)
		})

		return(
			<div>
				<nav id="days-nav" className="nav navbar">
					<Link to="/Horoscope-React/yesterday" className="nav-item nav-link">Yesterday</Link>
					<Link to="/Horoscope-React/" className="nav-item nav-link">Today</Link>
					<Link to="/Horoscope-React/tomorrow" className="nav-item nav-item">Tomorrow</Link>
				</nav>
				<div id="signs">
					{signsDiv}
				</div>
			</div>
		)
	}
}
