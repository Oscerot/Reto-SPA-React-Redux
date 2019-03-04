import React, { Component } from 'react';
import ElementsList from '../src/components/ElementsList';
import ElementInfo from '../src/components/ElementInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <ElementsList />
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <ElementInfo />
        </div>
      </div>
    );
  }
}

export default App;
