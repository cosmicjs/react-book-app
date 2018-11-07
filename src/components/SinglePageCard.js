import React from 'react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

 function SinglePageCard(props) {
     
  return (
    props.book ?
  <div className="div">
    <Link to='/search'><i className="fa fa-search fa-2x top-bar" aria-hidden="true" ></i></Link>
    <div className="single-card">
   <div className="book"> {<img src={props.book.metadata.hero.url} alt="" />}
   </div>
     <div className="book-text">
     <h1> {props.book.title}</h1>
     
   <div className="text"  dangerouslySetInnerHTML={{__html:props.book.content}}></div>
  <Link to='/' className="btn-back">Go back</Link>
     </div>
    
     <Link to={'/categories/' + props.book.metadata.category.slug} className="single-card-category">
     <div >
     <span className="ctg">{ props.book.metadata.category.title}</span>
     </div>
     </Link>
    </div>
  </div> :  <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
  )
}
const mapStateToProps = (state, ownProps) => {
    let slug = ownProps.match.params.item_slug;
    return{
        book: state.books.find(item => item.slug === slug)
    }
}
export default connect(mapStateToProps)(SinglePageCard);