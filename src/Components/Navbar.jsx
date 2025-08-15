import React from "react";

function Navbar({ onCategoryChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold text-warning"
          href="#"
          onClick={() => onCategoryChange("general")}
        >
          WorldNews
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["general", "business", "entertainment", "sports", "technology"].map((cat) => (
              <li className="nav-item" key={cat}>
                <a
                  className="nav-link text-capitalize"
                  href="#"
                  onClick={() => onCategoryChange(cat)}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search News..."
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
