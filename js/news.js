let data = localStorage.getItem("msgList");
let msgList = [];

if (data !== "" && data !== null) {
  msgList = JSON.parse(data);
}

function addNews(obj) {
  const newsBody = document.createElement("li");
  newsBody.classList.add("news-list__item");
  const newsT = document.createElement("h4");
  newsT.classList.add("news-tittle");
  newsT.textContent = obj.tittle;
  const newsC = document.createElement("p");
  newsC.classList.add("news-content");
  newsC.textContent = obj.content;
  newsBody.append(newsT);
  newsBody.append(newsC);
  document.querySelector("#ul-news").append(newsBody);
}

for (const item of msgList) {
  addNews(item);
}

document.querySelector("#newsForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let newsTittle = document.querySelector("#add-news-title").value;
  let newsContent = document.querySelector("#add-news-text").value;
  let msgObj = {
    tittle: newsTittle,
    content: newsContent,
  };

  msgList.push(msgObj);

  localStorage.setItem("msgList", JSON.stringify(msgList));

  addNews(msgObj);

  document.querySelector("#add-news-title").value = "";
  document.querySelector("#add-news-text").value = "";
});

const deleteNews = document.querySelector("#clear-news");

deleteNews.addEventListener("click", function (event) {
  event.stopImmediatePropagation();
  localStorage.clear();
  window.location.reload();
});
