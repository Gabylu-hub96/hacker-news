import "./App.css";
import React, { useState, useEffect } from "react";

export default function ListOfNews(props) {
  const [news, setNews] = useState([]);
  const { query } = props;
  const fetchData = () => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.hits));
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  if (news.length > 0) {
    return (
      <>
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
      </>
    );
  } else {
    return <div>Nothing to see here</div>;
  }
}
