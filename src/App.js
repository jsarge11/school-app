import React, { Component } from 'react';
import routes from './components/routes'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

class App extends Component {

  render() {
    console.log(process.env);
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
