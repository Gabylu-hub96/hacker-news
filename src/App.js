import "./App.css";
import React, { useState, useEffect } from "react";
import Search from "./Search";

function App() {
  const [news, setNews] = useState([]);
  // const [searchInput, setSearchInput] = useState("");

  /*   const renderNews = (data) => {
    const news = data.hits;
    console.log({ news });
    return news.map((newsItem) => {
      console.log(newsItem.title);
      return <div>newsItem.title</div>;
    });
  }; */

  const fetchData = () => {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.hits));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
  return (
    <div className="App">
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container">
          <a href="http://localhost:3000" className="navbar-brand">
            Logo
          </a>
          <Search />
        </div>
      </nav>
      <div className="container">
        {news.length > 0 && (
          <div className="list-group my-5">
            {news.map((newsItem) => (
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="list-group-item list-group-item-action"
                aria-current="true"
                key={newsItem.objectID}
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{newsItem.title}</h5>
                  <small>{newsItem.created_at}</small>
                </div>
                <p className="mb-1">{newsItem.story_text}</p>
                <small>By {newsItem.author}</small>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// <small>{Date.parse(newsItem.created_at)}</small>
