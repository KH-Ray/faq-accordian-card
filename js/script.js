const faqQuestionAnswer = document.querySelectorAll(".faq-question-answer");
const faqQuestion = document.querySelectorAll(".faq-question");

faqQuestionAnswer.forEach((text) => {
  text.addEventListener("click", () => {
    text.querySelector(".faq-question").classList.toggle("weight--700");
    text.querySelector(".icon-arrow").classList.toggle("rotate--180");
    text.querySelector(".faq-answers").classList.toggle("hidden");
  });
});
