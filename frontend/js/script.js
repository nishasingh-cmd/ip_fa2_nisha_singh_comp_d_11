// 🔥 BACKEND API
const API_URL = "https://python-web-development-d06k.onrender.com/reviews";

// ================= REVIEWS =================
const container = document.getElementById("reviews-container");

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    container.innerHTML = "";

    data.forEach(r => {
      const div = document.createElement("div");

      div.classList.add("review-card");

      div.innerHTML = `
        <h4>${r.name}</h4>
        <p>${r.review}</p>
        <span>⭐ ${r.rating}</span>
      `;

      container.appendChild(div);
    });
  });

// ================= BOOK CLICK =================
const cards = document.querySelectorAll(".book-card");

const title = document.getElementById("book-title");
const author = document.getElementById("book-author");
const image = document.getElementById("book-image");

cards.forEach(card => {
  card.addEventListener("click", () => {
    title.textContent = card.dataset.title;
    author.textContent = card.dataset.author;
    image.src = card.querySelector("img").src;
  });
});

// ================= FAVORITES =================
const favBtn = document.getElementById("fav-btn");

favBtn.addEventListener("click", () => {
  const book = title.textContent;

  let favs = JSON.parse(localStorage.getItem("favs")) || [];

  if (favs.includes(book)) {
    favs = favs.filter(b => b !== book);
    favBtn.textContent = "❤️ Add to Favorites";
  } else {
    favs.push(book);
    favBtn.textContent = "💔 Remove Favorite";
  }

  localStorage.setItem("favs", JSON.stringify(favs));
});

// ================= READ BUTTON =================
document.getElementById("read-btn").addEventListener("click", () => {
  window.open("https://openlibrary.org", "_blank");
});

// ================= LOGIN CHECK =================
if (!localStorage.getItem("user")) {
  window.location.href = "login.html";
}

// ================= LOGOUT =================
document.querySelector(".logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});
