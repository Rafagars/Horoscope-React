import React, { Component } from 'react'

class Header extends Component {
    render(){
        return(
            <header id="header-nav" className="navbar navbar-fixed-top navbar-inverse">
                <div className="container">         
                    <h1 id="logo"><img id="logo-img" src="https://www.bergerpaints.com/resources/images/signwheel.png" /><a href="#">Horoscope App</a></h1>
                </div>
            </header>
            )
    }
}
export default Header