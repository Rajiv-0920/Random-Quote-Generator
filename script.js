const btn = document.querySelector(".btn");
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const apiURL = "https://api.quotable.io/random";

btn.addEventListener("click", getQuote);
getQuote();
async function getQuote() {
  try {
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "";
    btn.innerText = "Loading...";
    btn.disable = true;
    const response = await fetch(apiURL);
    const data = await response.json();
    const quote = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quote;
    authorEl.innerText = quoteAuthor;
    btn.innerText = "Get a quote";
    btn.disable = false;
  } catch (error) {
    quoteEl.innerText = "Try again later,";
    authorEl.innerText = " An error happend";
  }
}
