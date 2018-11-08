// import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import MenuLikes from './MenuLikes';
// const Cards = (props) => {

//   return (
//     <div className="cards">

//       {
//           props.booksList.map((item, index) => {
//               return(
//                     <div className="card" key={index}>
//                         <div className="overlay">
//                         <img src={item.metadata.hero.url} alt=""/>
//                        <div className="strip">
//                        <div className="like-menu">
//         <ul>
//             <li>
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
//   )
// }
// export default (Cards);

import React, { Component } from 'react'

export default class Cards extends Component {

  Save = (item) => {
    localStorage.setItem("Like", item );
    console.log("Clicked", item);
  }

  render() {
  
    return (
          <div className="cards">

      {
          this.props.booksList.map((item, index) => {
              return(
                    <div className="card" key={index}>
                        <div className="overlay">
                        <img src={item.metadata.hero.url} alt=""/>
                       <div className="strip">
                       <div className="like-menu">
        <ul>
            <li onClick={()=> this.Save(item.slug)}>
            <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>

            </li>
            <li><i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
</li>
<li><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
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
}
