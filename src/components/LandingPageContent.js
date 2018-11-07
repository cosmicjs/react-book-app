import React from 'react'
import { Link } from 'react-router-dom';

export default function LandingPageContent(props) {
  return (
    <div >
        <Link to='/search'><i className="fa fa-search fa-2x top-bar" aria-hidden="true"></i></Link>
     
            <div className="content">
              <h1>{props.page}</h1>
              {props.body ? <span className="content-body"  dangerouslySetInnerHTML={{__html:props.body.content}}></span> :  <p> Loading...</p> }
            </div>  
         
    </div>
  )
}
