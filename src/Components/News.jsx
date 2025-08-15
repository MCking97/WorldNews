import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],  // ✅ Always an array
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=YOUR_API_KEY`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ articles: data.articles || [], loading: false });
    } catch (err) {
      console.error("Error fetching news:", err);
      this.setState({ error: err.message, loading: false });
    }
  }

  render() {
    return (
      <div className="container my-3" style={{ backgroundColor: "#333", minHeight: "100vh" }}>
        <h2
          className="text-center text-capitalize fw-bold my-4"
          style={{
            color: "#FFD700", // Bright yellow
            fontSize: "2.5rem",
            textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          WorldNews - {this.props.category} Headlines
        </h2>

        {this.state.loading && <h5 className="text-center">Loading news...</h5>}
        {this.state.error && <h5 className="text-center text-danger">Error: {this.state.error}</h5>}

        <div className="row">
          {this.state.articles.length > 0 &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
