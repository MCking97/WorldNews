import React, { Component } from 'react';

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card shadow-sm rounded" style={{ width: "100%", minHeight: "400px" }}>
          <img
            src={imageUrl || "https://via.placeholder.com/300x180?text=No+Image"}
            className="card-img-top"
            alt={title || "News"}
            style={{ height: "180px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title ? `${title}...` : "No Title"}</h5>
            <p
              className="card-text"
              style={{
                height: "60px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {description ? description : "No description available"}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-warning mt-auto"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
