import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
      )
  }
}


