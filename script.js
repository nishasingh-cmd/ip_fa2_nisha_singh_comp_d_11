fetch("http://127.0.0.1:5000/reviews")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("reviews-container");

    data.forEach(review => {
        const div = document.createElement("div");
        div.classList.add("review-card");

        div.innerHTML = `
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <p>⭐ ${review.rating}</p>
        `;

        container.appendChild(div);
    });
})
.catch(err => console.error(err));
