import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
      )
  }
}

export default App;
