import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import ListOfNews from "./ListOfNews";

function App() {
  // const [news, setNews] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  /*   const renderNews = (data) => {
    const news = data.hits;
    console.log({ news });
    return news.map((newsItem) => {
      console.log(newsItem.title);
      return <div>newsItem.title</div>;
    });
  }; */

  /*   const fetchData = () => {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.hits));
  };

  useEffect(() => {
    fetchData();
  }, []); */

  /*   axios
      .get(
        "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story"
      )
      .then((res).json() => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 */
  const [query, setQuery] = useState("*");
  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container">
          <a href="http://localhost:3000" className="navbar-brand">
            Logo
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
