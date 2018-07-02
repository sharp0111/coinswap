import React, { Component } from 'react';
import Header from './components/Header';
import ExchangeBox from './components/ExchangeBox';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


// import './App.css';

// library.add(fab, faCoffee);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
          <ExchangeBox/>
        </header>
      </div>
    );
  }
}

export default App;
