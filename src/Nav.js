import React from "react";

function Nav() {
  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container">
          <a href="http://localhost:3000/" className="navbar-brand">
            ANFS - Awesome News Feed Search
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-dark"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
