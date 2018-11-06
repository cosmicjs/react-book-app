import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FetchApiMenu } from './../store/actions/MenuAction';
import { NavLink} from 'react-router-dom';
 class Menu extends Component {

  componentDidMount () {
    this.props.fetchMenu();
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
const mapDispatchToProps = (dispatch) => {
  return{
    fetchMenu: () => {
      dispatch(FetchApiMenu());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
