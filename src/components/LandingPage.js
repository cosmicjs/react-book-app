import React from 'react'
import MenuLikes from './MenuLikes';
import Menu from './Menu';
import Cards from './Cards';

const LandingPage = ()=>{
  return (
    <div className="main-wrap">
        <div className="container">
        <MenuLikes />
            <div className="main-slide">
                <h1>Book Diary</h1>
                <p>" Gabriel.s small cottage was lit by a single candle that cast light on a collection of weapons along one wall and a few books on a bookshelf on another "</p>
            </div>
            <Menu />
        </div>
        <Cards />
    </div>
  )
}

export default LandingPage
