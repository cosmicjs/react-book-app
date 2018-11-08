import React from 'react'

export default function MenuLikes() {
  return (
    <div className="like-menu">
        <ul>
            <li>
            <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>

            </li>
            <li><i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
</li>
<li><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i>
</li>
        </ul>  
    </div>
  )
}

// import React, { Component } from 'react'

// export default class MenuLikes extends Component {

//   render() {
//     console.log(this.props);
//     const Save = () => {
//       localStorage.setItem("Like", "hey" );
//     }
//     return (
//       <div className="like-menu">
//         <ul>
//             <li onClick={this.Save}><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i></li>
//             <li><i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i></li>
//             <li><i className="fa fa-share-square-o fa-2x" aria-hidden="true"></i></li>
//         </ul>  
//     </div>
//     )
//   }
// }
