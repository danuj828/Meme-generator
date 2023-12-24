const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-button"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, author, title) => {
  memeImage.setAttribute("src", url);
  memeAuthor.innerHTML = author;
  memeTitle.innerHTML = title;
};

async function fetchData() {
  const response = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await response.json();
  updateDetails(data.url, data.author, data.title);
}

generateMemeBtn.addEventListener("click", fetchData);
