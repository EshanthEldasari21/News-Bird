import React from "react";

const NewsItems =(props)=> {
  
    let { title, description, src, url } = props;
    return (
      <a href={url} target="_blank" rel="noreferrer" className="cardA">
        <div className="card" style={{ width: "20rem"}}>
          <img
            src={!src ? "news (2).jpg" : src}
            className="card-img-top"
            alt="Reference img"
            height={160}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </a>
    );
  }


export default NewsItems
