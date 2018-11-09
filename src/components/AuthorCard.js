import React from 'react'
import { connect } from 'react-redux';
import Cards from './Cards';
import LandingPageContent from './LandingPageContent';
 function AuthorCard(props) {
  
  return (
    <div className="reset">
        {props.author && <LandingPageContent page={props.author.title} body={props.author}/>}
       {props.booksList ? <Cards booksList={props.booksList}/> : <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const author = ownProps.match.params.author_slug;
  console.log('author', state);
  return{
    booksList:state.books.filter(cat => {
        return cat.metadata.author.slug === author      
    }),
    author: state.author.find(item => {return(item.slug === author)})
}
}

export default connect(mapStateToProps)(AuthorCard);
