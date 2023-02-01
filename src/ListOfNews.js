import React from "react";

const ul = document.getElementById("root");
const url =
  "https://hn.algolia.com/api/v1/search_by_date?query=openai&tags=story";

const renderNews = (data) => {
  const news = data.hits;
  console.debug({ news });

  return news.map((newsItem) => {
    return (ul.innerHTML += `<p>${newsItem.title}</p>`);
  });
};

fetch(url)
  .then((response) => response.json())
  .then((response) => renderNews(response));

function ListOfNews() {
  return <div>TEST</div>;
}

export default ListOfNews;
