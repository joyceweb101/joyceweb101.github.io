const { reviewData } = window;

window.addEventListener("DOMContentLoaded", function () {

    function createReviewCard(review){
        const card = document.createElement("div");
        card.classList.add("review");

        const name = document.createElement("h3");
        const nameText = document.createTextNode(review.name); 
        name.classList.add("review-name");
        name.appendChild(nameText);
        card.appendChild(name);

        const date = document.createElement("p");
        const dateText = document.createTextNode("Date: " + review.date); 
        date.classList.add("review-date");
        date.appendChild(dateText);
        card.appendChild(date);

        const rate = document.createElement("p");
        const rateText = "Rate: " + "★ ".repeat(review.rating) + "☆ ".repeat(5 - review.rating);
        rate.classList.add("review-rate");
        rate.appendChild(document.createTextNode(rateText));
        card.appendChild(rate);

        const comment = document.createElement("p");
        const commentText = document.createTextNode(review.comment);
        comment.classList.add("review-comment");
        comment.appendChild(commentText);
        card.appendChild(comment);

        return card;
    }

    function showReviews(){
        const reviewsCards = document.getElementById("reviewsCards");
        reviewsCards.innerHTML = "";

        reviewData.forEach((review) => {
        reviewsCards.appendChild(createReviewCard(review));
        });
    }

    showReviews();

    const newReviewForm = document.getElementById("addReview");
    newReviewForm.addEventListener("submit", (event)=> {
        event.preventDefault();

        const name = document.getElementById("nameR");
        const date = document.getElementById("dateR");
        const rating = document.getElementById("rateR");
        const comment = document.getElementById("reviewR");

        const newReviewdata = {
            name: name.value,
            date: date.value,
            rating: parseInt(rating.valueOf),
            comment: comment.value
        };

        reviewData.push(newReviewdata);
        addReview.reset();

        showReviews();

    });

});
