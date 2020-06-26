import React, {Component} from 'react';
import './Signs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Signs extends Component {
	render(){
		const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]


		const signsDiv = signs.map((sign, index) => {
			return (
				<div className="sign">
					<h4>{sign}</h4>
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