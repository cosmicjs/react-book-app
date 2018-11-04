import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MenuLikes from './MenuLikes';
const Cards = (props) => {
 
  return (
    <div className="cards">
    
    
      {
          props.booksList.map((item, index) => {
              return(
                <Link to='/' key={index}>
                    <div className="card">
                        <div className="overlay">
                        <img src={item.metadata.hero.url} alt=""/>
                       <div className="strip">
                       <MenuLikes />
                       </div>
                        </div>
                        <h2>{item.title}</h2>
                        <br/>
                        <div><b>Author:</b> {item.metadata.author.title}</div>
                        <div><b>Genres:</b> {item.metadata.category.title}</div>
                    </div>
                </Link>
              )
          })
      }
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        booksList: state.books
    }
}

export default connect(mapStateToProps)(Cards);