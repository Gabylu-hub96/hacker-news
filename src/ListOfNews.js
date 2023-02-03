import "./App.css";
import React, { useState, useEffect } from "react";

export default function ListOfNews(props) {
  const [news, setNews] = useState([]);
  const [connErr, setConnErr] = useState(false);
  const { query } = props;
  const fetchData = () => {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story`
    )
      .then((response) => response.json())
      .then((data) => setNews(data.hits))
      .catch(() => setConnErr(true));
    console.log(connErr);
    console.log("Error");
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  if (news.length > 0 && connErr === false) {
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
  } else if (connErr === false) {
    return (
      <div className="list-group my-5">
        <h2>Nothing to see here. Please search for something else.</h2>
      </div>
    );
  } else {
    return (
      <div className="list-group my-5">
        <h2>
          We are very sorry! There was a connection error with Hacker News.
          Please try again later.
        </h2>
      </div>
    );
  }
}
