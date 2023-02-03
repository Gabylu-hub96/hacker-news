import "./App.css";
import React, { useState } from "react";
import Search from "./Search";
import ListOfNews from "./ListOfNews";

function App() {
  const [query, setQuery] = useState("*");
  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container">
          <a href="http://localhost:3000" className="navbar-brand">
            AHNS - Awesome Hacker News Search
          </a>
          <Search handleSearch={handleSearch} />
        </div>
      </nav>
      <div className="container">
        <ListOfNews query={query} />
      </div>
    </div>
  );
}

export default App;

// <small>{Date.parse(newsItem.created_at)}</small>
