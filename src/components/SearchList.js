import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
 function SearchList(props) {
  return (
    <div>
      
        <ul>
         {
           props.value && props.lists.map((item, index) => {
                 return(
                    <Link  key={index} to={'/'+ item.slug }><li>{item.title}</li></Link> 
                 )
             })
         }
        </ul>

        
      </div>
  )
}
const mapStateToProps = (state) => {
    return{
        lists: state.search,
        value: state.value
    }
}

export default connect(mapStateToProps)(SearchList);
