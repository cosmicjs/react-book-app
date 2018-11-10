 import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Cards = (props) => {
  
    const  Save = (item) => {
        props.hitLike(item);  
      }

  return (
  
    <div className="cards">

      {
        props.booksList.map((item, index) => {
              return(
                    <div className="card" key={index}>
                        <div className="overlay">
                        <img src={item.metadata.hero.url} alt=""/>
                       <div className="strip">
                       <div className="like-menu">
        <ul className="position">
           <li onClick={()=> Save(index, item.slug)}>
            <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i><span className="vote">{item.options.slug_field}</span>
            </li>
<li> <a href={`https://twitter.com/intent/tweet?text=${item.slug}/${item.created}/${item.metadata.author.slug}`}><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i></a>
</li>
        </ul>  
    </div>
                       </div>
                        </div>
                        <Link to={'/'+ item.slug }>
                        <h2>{item.title}</h2>
                        </Link>
                        <br/>
                        <Link to={'/author/' + item.metadata.author.slug}><div><b>Author:</b> {item.metadata.author.title}</div></Link>
                        <Link to={'/categories/' + item.metadata.category.slug}><div><b>Genres:</b> {item.metadata.category.title}</div></Link> 
                    </div>
              )
          })
      }
    </div>
  )
}
const mapStateToProps= (state) => {
    return{
        like: state.likes
       
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        hitLike: (item) => {
            dispatch({type:'HANDLE_LIKE', like: item })
        },
        hitAdd: (item) => {
            dispatch({type:'HANDLE_ADD', add: item })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);

// import React, { Component } from 'react'
// class Cards extends Component {
// //     state = {
// //         test: []
// //     }
//   Save = (item) => {
//     this.setState({
//         test: this.state.test.concat(item)
//     })
//   }
//   componentDidUpdate = (item) =>{
//     console.log("Did update", item);
//     this.props.hitLike(item);
//   }

//   render() {
  
//     return (
//           <div className="cards">

//       {
//           this.props.booksList.map((item, index) => {
//               return(
//                     <div className="card" key={index}>
//                         <div className="overlay">
//                         <img src={item.metadata.hero.url} alt=""/>
//                        <div className="strip">
//                        <div className="like-menu">
//         <ul>
//             <li onClick={()=> this.props.hitLike(item.slug)}>
//             <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>

//             </li>
//             <li><i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
// </li>
// <li><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
// </li>
//         </ul>  
//     </div>
//                        </div>
//                         </div>
//                         <Link to={'/'+ item.slug }>
//                         <h2>{item.title}</h2>
//                         </Link>
//                         <br/>
//                         <Link to={'/author/' + item.metadata.author.slug}><div><b>Author:</b> {item.metadata.author.title}</div></Link>
//                         <Link to={'/categories/' + item.metadata.category.slug}><div><b>Genres:</b> {item.metadata.category.title}</div></Link> 
//                     </div>
//               )
//           })
//       }
//     </div>
//     )
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//     return{
//         hitLike: (item) => {
//             dispatch({type:'HANDLE_LIKE', like: item })
//         }
//     }
// }
// export default connect(null, mapDispatchToProps)(Cards);