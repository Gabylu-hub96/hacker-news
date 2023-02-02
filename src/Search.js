import "./App.css";
import React, { useState } from "react";

export default function Search() {
  // const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const newQuery = { query };
    setQuery(query);
    console.log(query);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <button className="btn btn-success" type="submit">
        Search
      </button>
    </form>
  );
}
