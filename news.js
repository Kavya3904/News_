const news_btn = document.getElementById("Newsbtn");
const body_div = document.getElementById("body-div");

function news() {




news_btn.style.display="none"
document.getElementById('btn-div').style.marginTop="0%"
body_div.style.display="block"
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b06997a38b5148b5bbc1241078798046",
    true
  );

  xhr.onload = function () {
    if (xhr.status == 200) {
      let News = JSON.parse(this.response);
      let article = News.articles;
      console.log(article);

      article.forEach((Element) => {

        const news_div = document.createElement("div");
        const author = document.createElement("h5");
        const title = document.createElement("h2");
        const description = document.createElement("h4");
        const urlToImage = document.createElement("img");
        const publishedAt = document.createElement("h6");
        const more = document.createElement("a");
        const content = document.createElement("p");
        

        news_div.classList.add("news-div");
        author.classList.add("author-class");
        title.classList.add("title-class");
        description.classList.add("description-class");
        publishedAt.classList.add("publishedAt-class");
        content.classList.add("content-class");
        more.classList.add("more-class");
        urlToImage.classList.add("image-class");

        var link = document.createTextNode("Link to full news");

        author.innerHTML = Element.author;
        title.innerHTML = Element.title;
        description.innerHTML = Element.description;
        publishedAt.innerHTML = Element.publishedAt;
        more.href = Element.url;
        urlToImage.src = Element.urlToImage;
        content.innerHTML=Element.content;

        more.appendChild(link);

        news_div
          .appendChild(title)
          .appendChild(author)
          .appendChild(description)
          .appendChild(more);

        news_div.appendChild(publishedAt);
        news_div.appendChild(urlToImage);
        news_div.appendChild(content);
        document.getElementById("body-div").appendChild(news_div);

      });
    }
  };
  xhr.send();
}
