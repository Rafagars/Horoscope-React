import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Signs from './Signs'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Signs />
      </div>
      )
  }
}

export default App;
