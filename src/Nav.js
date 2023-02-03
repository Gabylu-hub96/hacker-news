import React from "react";

function Nav({ posts, setSeachInput }) {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    setSeachInput(e.target.value);
  };
  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Logo</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
