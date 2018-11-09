import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards';
import LandingPageContent from './LandingPageContent';

function CategoryCard(props) {
 
  return (
    <div className="reset">
        {props.category && <LandingPageContent page={props.match.params.category_slug} body={props.category}/>}
       {props.booksList ? <Cards booksList={props.booksList}/> : <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>}
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
    const category = ownProps.match.params.category_slug;
    return{
        booksList:state.books.filter(cat => {
            // console.log("from map", cat.metadata.category.slug);
            return cat.metadata.category.slug === category      
        }),
        category: state.menu.find(item => (item.slug === category))
    }
}
export default connect(mapStateToProps)(CategoryCard);
