import React from 'react'
import { connect } from 'react-redux';

 function SinglePageCard(props) {
     
  return (
    <div className="single-card">
   <div className="book"> {props.book && <img src={props.book.metadata.hero.url} alt="" />}</div>
     <div className="book-text">
     <h1> {props.book && props.book.title}</h1>
  { props.book ? <p  dangerouslySetInnerHTML={{__html:props.book.content}}></p> : <p> Loading </p> }
     </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
    let slug = ownProps.match.params.item_slug;
    return{
        book: state.books.find(item => item.slug === slug)
    }
}
export default connect(mapStateToProps)(SinglePageCard);