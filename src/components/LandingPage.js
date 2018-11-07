import React from 'react'
import MenuLikes from './MenuLikes';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const LandingPage = (props)=>{
  return (
    <div className="main-wrap">
        <div className="container">
        <Link to='/search'><i className="fa fa-search fa-2x top-bar" aria-hidden="true" ></i></Link>
            <div className="main-slide">
                <h1>Book Diary</h1>
                <p>" Gabriel.s small cottage was lit by a single candle that cast light on a collection of weapons along one wall and a few books on a bookshelf on another "</p>
            </div>
            <MenuLikes />
        </div>
        <h2 className="cards-title">Favourite</h2>
        <Cards booksList={props.booksList}/>  
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        booksList: state.books
    }
}
export default connect(mapStateToProps)(LandingPage)
