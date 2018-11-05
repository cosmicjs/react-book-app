import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.input} onChange={this.props.handleInput}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        input: state.input
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInput: (e) => {
            dispatch({type:'INPUT_CHANGE', input:e.target.value})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Input);
