import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';
import sal from 'sal.js';

import LandingPage from './components/LandingPage';
import { FetchApiBooks } from './store/actions/BooksAction';
import Icon from './components/Icon';
import SinglePageCard from './components/SinglePageCard';
import CategoryCard from './components/CategoryCard';
import AuthorCard from './components/AuthorCard';

class App extends Component {

  componentDidMount () {

    this.props.fetchBooks();
    sal({
      threshold: 1,
      once: false,
    });

  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/search' exact component={Icon} />
            <Route path='/:item_slug' exact component={SinglePageCard} />
            <Route path='/author/:author_slug' exact component={AuthorCard} />
            <Route path='/categories/:category_slug' component={CategoryCard} />
            
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
