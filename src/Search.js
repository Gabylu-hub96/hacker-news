import "./App.css";
import React, { useState } from "react";

export default function Search({ handleSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form className="d-flex" onSubmit={handleSubmit}>
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
