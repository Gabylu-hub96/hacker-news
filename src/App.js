import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPost] = useState([]);
  const [searchInput, setSearchInput] = useState("");
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

  // assign each post a number that remains even after filtering
  for (let index = 0; index < posts.length; index++) {
    posts[index].assignedNumber = index;
  }

  // Get current posts
  let postsLeftAfterFilter = posts.filter((post) =>
    post.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = postsLeftAfterFilter.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  console.log(currentPosts);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="App">
        <Nav posts={currentPosts} setSearchInput={setSearchInput} />
        <article className="container mt-3">
          <ul list-style="none">
            {currentPosts
              .filter((post) =>
                post.title.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((post) => (
                <div>
                  <h5>
                    <li key={post.objectID}>
                      <a href={post.url} target="_blank">
                        {post.assignedNumber + 1}. {post.title}.
                      </a>
                    </li>
                  </h5>

                  <p>
                    {post.points} points by {post.author} {d.getHours()} hours
                    ago | Hide | comments: {post.num_comments}
                  </p>
                  <hr />
                </div>
              ))}
          </ul>
        </article>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={postsLeftAfterFilter.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;
