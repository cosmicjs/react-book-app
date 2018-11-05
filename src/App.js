import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

import LandingPage from './components/LandingPage';
import { FetchApiBooks } from './store/actions/BooksAction';
import Icon from './components/Icon';
import SinglePageCard from './components/SinglePageCard';

class App extends Component {

  componentDidMount () {

    this.props.fetchBooks();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/search' exact component={Icon} />
            <Route path='/:item_slug' component={SinglePageCard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchBooks: () => {
      dispatch(FetchApiBooks());
    }
    
  }
}
export default connect(null,mapDispatchToProps)(App);
