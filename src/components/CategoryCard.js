import React from 'react'
import { connect } from 'react-redux'
import Cards from './Cards';
function Categroies(props) {
  return (
    <div>
     
        <Cards booksList={props.booksList}/>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
    const category = ownProps.match.params.category_slug;
    return{
        booksList:state.books.filter(cat => {
            // console.log("from map", cat.metadata.category.slug);
            return cat.metadata.category.slug === category
        }) 
    }
}
export default connect(mapStateToProps)(Categroies);
