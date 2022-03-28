
const api = "https://animechan.vercel.app/api/random";

//getting elements with
const anime = document.getElementById("anime");
const quote = document.getElementById("quote");
const character = document.getElementById("character");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      anime.innerHTML=`${data.anime}`;
      quote.innerHTML = `"${data.quote}"`;
      character.innerHTML = `- ${data.character}`;
    });
}
