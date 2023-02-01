import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";

function App() {
  const [posts, setPost] = useState([]);
  const [searchInput, setSeachInput] = useState([]);
  var d = new Date();
  useEffect(() => {
    axios
      .get(
        "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story"
      )
      .then((res) => {
        setPost(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Nav posts={posts} setSeachInput={setSeachInput} />

        <article className="container mt-3">
          <ol>
            {posts.map(
              ({ title, url, points, num_comments, author, objectID }) => (
                <div>
                  <h5>
                    <li key={objectID}>
                      <a href={url} target="_blank">
                        {title}.
                      </a>
                    </li>
                  </h5>

                  <p>
                    {points} points by {author} {d.getHours()} hours ago | Hide
                    | comments: {num_comments}
                  </p>
                  <hr />
                </div>
              )
            )}
          </ol>
        </article>
      </div>
    </>
  );
}

export default App;
