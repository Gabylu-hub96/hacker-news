import "./App.css";
import { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [posts, setPost] = useState([]);
  const [searchInput, setSeachInput] = useState("");

  const renderNews = (data) => {
    const news = data.hits;
    console.log({ news });
    return news.map((newsItem) => {
      return <div>newsItem.title</div>;
    });
  };

  useEffect(() => {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story"
    )
      .then((response) => response.json())
      .then((response) => renderNews(response));
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
          <a className="navbar-brand">Logo</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSeachInput(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        {posts.map((post) => (
          <>
            <h3 key={post.id}>{post.hits[0]}</h3>
            <p>{post.body}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
