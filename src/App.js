import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

import LandingPage from './components/LandingPage';
import { FetchApiBooks } from './store/actions/BooksAction';
import Icon from './components/Icon';
class App extends Component {

  componentDidMount () {

    this.props.fetchBooks();
  //   const icon = document.querySelector('.top-bar');
  //   const all = document.querySelector('.all-overlay');

  //   icon.addEventListener('click', () => {
  //     if(all.style.top === "-100%") {
  //       all.style.top = '0px';
  //       console.log("if");
       
  //   }
  //   else{
  //       all.style.top = '-100%';
  //       console.log("work")

  //   }
  
  // });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/search'  component={Icon} />
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
