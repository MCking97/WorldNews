import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async fetchNews(category) {
    const apiKey = "718e2630c8ae4189a5615d8c72b27bf1"; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles, loading: false });
  }

  componentDidMount() {
    this.fetchNews(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchNews(this.props.category);
    }
  }

  render() {
    return (
      <div
      className="container my-3"
    >
      <h2
        className="text-center text-capitalize fw-bold my-4"
        style={{
          color: "#FFD700",
          fontSize: "2.5rem",
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        WorldNews - {this.props.category} Headlines
      </h2>

      <div className="row">
        {this.state.articles.length > 0 ? (
          this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))
        ) : (
          <h5 className="text-center text-light">Loading news...</h5>
        )}
      </div>
    </div>
  );
}
}

export default News;
