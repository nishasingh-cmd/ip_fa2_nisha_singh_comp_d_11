// 🔥 BACKEND API
const API_URL = "https://python-web-development-d06k.onrender.com/reviews";

// ==========================
// REVIEWS SYSTEM
// ==========================
const reviewsContainer = document.getElementById("reviews-container");

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    reviewsContainer.innerHTML = "";

    data.forEach(review => {
      const div = document.createElement("div");
      div.classList.add("review-card");

      div.innerHTML = `
        <h4>${review.name}</h4>
        <p>${review.review}</p>
        <span>⭐ ${review.rating}</span>
      `;

      reviewsContainer.appendChild(div);
    });
  });

// ==========================
// BOOK CLICK SYSTEM
// ==========================
const bookCards = document.querySelectorAll(".book-card");

const title = document.getElementById("book-title");
const author = document.getElementById("book-author");
const image = document.getElementById("book-image");

bookCards.forEach(card => {
  card.addEventListener("click", () => {
    const bookTitle = card.getAttribute("data-title");
    const bookAuthor = card.getAttribute("data-author");
    const bookImage = card.querySelector("img").src;

    title.textContent = bookTitle;
    author.textContent = bookAuthor;
    image.src = bookImage;
  });
});

// ==========================
// READ BUTTON
// ==========================
document.getElementById("read-btn").addEventListener("click", () => {
  window.open("https://openlibrary.org", "_blank");
});
const favBtn = document.getElementById("fav-btn");

favBtn.addEventListener("click", () => {
  const title = document.getElementById("book-title").textContent;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.includes(title)) {
    favorites = favorites.filter(b => b !== title);
    favBtn.textContent = "❤️ Add to Favorites";
  } else {
    favorites.push(title);
    favBtn.textContent = "💔 Remove Favorite";
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  console.log("Favorites:", favorites);
});
