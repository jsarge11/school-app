import React, { Component } from 'react';
import routes from './components/routes'
import './App.css';
import './reset.css'
import './globalcss/buttons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

const App = () => {
    return (
      <div className="App">
        {routes}
      </div>
    );
}

export default App;
