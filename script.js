const API_URL = "https://python-web-development-d06k.onrender.com/reviews";

const reviewsContainer = document.getElementById("reviews-container");

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    reviewsContainer.innerHTML = "";

    data.forEach(review => {
      const card = document.createElement("div");
      card.classList.add("review-card");

      card.innerHTML = `
        <h3>${review.name}</h3>
        <p><strong>Rating:</strong> ⭐ ${review.rating}/5</p>
        <p>${review.review}</p>
      `;

      reviewsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching reviews:", error);
    reviewsContainer.innerHTML = "<p>Failed to load reviews.</p>";
  });
