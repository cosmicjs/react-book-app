import React from 'react'
import { connect } from 'react-redux'
function Categroies(props) {
    console.log("Propsy",props.items);
  return (
    <div>
        {
           props.items.map((item,index) => {
               return(
            <div  key={index}>
              <h1>{item.title}</h1>
            </div>
               )   
            })
        }
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
    const category = ownProps.match.params.category_slug;
  
    console.log('From category', category);
    return{
        items:state.books.filter(cat => {
            console.log("from map", cat.metadata.category.slug);
            return cat.metadata.category.slug === category
        })
          
    }
}
export default connect(mapStateToProps)(Categroies);
