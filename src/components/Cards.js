import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MenuLikes from './MenuLikes';
const Cards = (props) => {

  return (
    <div className="cards">

      {
          props.booksList.map((item, index) => {
              return(
                    <div className="card" key={index}>
                        <div className="overlay">
                        <img src={item.metadata.hero.url} alt=""/>
                       <div className="strip">
                       <MenuLikes />
                       </div>
                        </div>
                        <Link to={'/'+ item.slug }>
                        <h2>{item.title}</h2>
                        </Link>
                        <br/>
                        <div><b>Author:</b> {item.metadata.author.title}</div>
                        <Link to={'/categories/' + item.metadata.category.slug}><div><b>Genres:</b> {item.metadata.category.title}</div></Link> 
                    </div>
              )
          })
      }
    </div>
  )
}
// const mapStateToProps = (state) => {
//     return {
//         booksList: state.books
//     }
// }

export default (Cards);