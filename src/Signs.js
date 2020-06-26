import React, {Component} from 'react';
import './Signs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Horoscope from './Horoscope'

class Signs extends Component {
	render(){
		const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]


		const signsDiv = signs.map((sign, index) => {
			return (
				<div className="sign">
					<img className="sign-img mx-auto" alt="sign" src={`https://www.horoscope.com/images-US/signs/${sign.toLowerCase()}.png`} />
					<h2 className="text-center">{sign}</h2>
					<Horoscope sign={sign}/>
				</div>
			)
		})

		return(
			<div id="signs">
				{signsDiv}
			</div>
		)
	}
}

export default Signs;