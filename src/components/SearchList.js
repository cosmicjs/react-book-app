import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
 function SearchList(props) {
  return (
    <div className="search-list"> 
         {
           props.value && props.lists.map((item, index) => {
                 return(
                    <Link className="item" key={index} to={'/' + item.slug}>
                    <div className="item-title">{item.title}</div>
                    <div className="item-author">{item.metadata.author.title}</div>
                    </Link> 
                 )
             })
         }
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
