import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  import Signs from './Signs'

class Header extends Component {
    render(){
        return(
            <Router>
                <header id="header-nav" className="navbar navbar-fixed-top navbar-inverse">
                    <div className="container-fluid">
                        <h1 id="logo"><img id="logo-img" alt="Logo" src="https://www.bergerpaints.com/resources/images/signwheel.png" /><Link to="/Horoscope-React/">Horoscope App</Link></h1>
                    </div>
                </header>
                <Switch>
                    <Route path="/Horoscope-React/:day">
                        <div>
                            <Signs/>
                        </div>
                    </Route>
                    <Route exact path="/Horoscope-React/">
                        <div>
                            <Signs/>
                        </div>
                    </Route>
                </Switch>
            </Router>          
            )
    }
}
export default Header