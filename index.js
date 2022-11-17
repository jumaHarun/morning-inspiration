import { quotesArr } from "./quotes.js";

document.getElementById("container").innerHTML = getQuoteHtml(quotesArr);

fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.getElementById("main").style = `
        background-image: url("${data.urls.regular}");
    `;

    document.getElementById("hotlink").innerHTML = `
    <a href="${data.user.links.html}" id="link">${data.user.name} on unsplash</a>
    `;
  })
  .catch(err => console.log(err))

  // https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

function getQuoteHtml(arr) {
  let index = roll(0, arr.length);
  let quote = arr[index];

  return `
      <div class="quote-wrapper">
          <h6 class="quote">"${quote.quote}"</h6>
          <p class="author">- ${quote.author}</p>
      </div>
    `;
}

function roll(min, max, floatFlag) {
  let r = Math.random() * (max - min) + min;
  return floatFlag ? r : Math.floor(r);
}
