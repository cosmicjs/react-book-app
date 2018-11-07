import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
 class Menu extends Component {

  componentDidMount () {
    
  }
  render() {
    const { menuCategory } = this.props
    console.log("From component", this.props.menuCategory);
    return (
      <div className="category-menu">
        <ul>
            {   
              menuCategory && menuCategory.map((item, index) => {
                return (
                  <NavLink key={index} to={'/categories/'+ item.slug }> <li>{item.title}</li></NavLink>
                )
              })
            }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    menuCategory: state.menu
  }
}
export default connect(mapStateToProps)(Menu);


