import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
// import Posts from './components/Pagination';
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPost] = useState([]);
  const [searchInput, setSeachInput] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="App">
        <Nav posts={currentPosts} setSeachInput={setSeachInput} />

        <article className="container mt-3">
          <ol>
            {currentPosts.map(
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
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
