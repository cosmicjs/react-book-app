import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'




import LandingPage from './components/LandingPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' component={LandingPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
