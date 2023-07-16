import React, { Component } from "react";

export class Item extends Component {
  render() {
    let {title , description,imageUrl,newsUrl,date,time,author, source }=this.props;
    return (

        
      <div>
        <div className="card"   >
        <span style={{height:40 , padding:12}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
  
  </span>
          <img style={{height:170}} src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}           </p>
              

              
              <h4>Auhtor: <span> {author}</span></h4>
          

        

              <h5 className="my-3">Date: <span>  {date} </span></h5>
              <h5 >Time: <span>  {time} </span></h5>



            <a href={newsUrl} target="_blank" rel=" noopener noreferrer" className="btn btn-primary my-3">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
