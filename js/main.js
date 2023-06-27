const feedbackBtn = document.querySelector("#feedback-button");
const feedbackForm = document.querySelector("#myForm");
const btnCloseFeedback = document.querySelector("#btnCloseFeedback");
let likeCounter = 0;
let dislikeCounter = 0;
const like = document.querySelector("#likeBtn");
const dislike = document.querySelector("#dislikeBtn");
const changeLikeCounter = document.querySelector("#likeCounter");
const changeDislikeCounter = document.querySelector("#dislikeCounter");

feedbackBtn.addEventListener("click", function () {
  feedbackForm.classList.toggle("hidden");
});

btnCloseFeedback.addEventListener("click", function () {
  feedbackForm.classList.add("hidden");
});

like.addEventListener("click", function () {
  likeCounter += 1;
  changeLikeCounter.innerText = likeCounter;
});

dislike.addEventListener("click", function () {
  dislikeCounter += 1;
  changeDislikeCounter.innerText = dislikeCounter;
});
