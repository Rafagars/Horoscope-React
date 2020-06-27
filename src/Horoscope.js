import React, { Component } from 'react'

class Horoscope extends Component {
    constructor(props){
        super(props)
        this.state = {
            json: {}
        }
    }

    componentDidMount () {
        const URL = `https://aztro.sameerkumar.website/?sign=${this.props.sign}&day=${this.props.day}`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render(){
        const horoscope = this.state.json
        return(
            <div className="text-center">
                <h6>{horoscope.date_range}</h6>
                <h6>Date: {horoscope.current_date}</h6>
                <p>{horoscope.description}</p>
                <p>
                    <small>
                        <span>Mood: {horoscope.mood}, </span>
                        <span>Color: {horoscope.color}, </span>
                        <span>Lucky number: {horoscope.lucky_number}</span>
                    </small>
                </p>
            </div>
        )
    }
}

export default Horoscope