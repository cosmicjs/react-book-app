import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Cards = (props) => {
  return (
    <div className="cards">
      {
          props.booksList.map((item, index) => {
              return(
                <Link to='/' key={index}>
                    <div className="card">
                        <img src={item.metadata.hero.url} alt=""/>
                        <h2>{item.title}</h2>
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