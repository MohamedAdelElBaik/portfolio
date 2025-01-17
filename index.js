function toggleAnswer(id) {
  const answer = document.getElementById(id);
  const icon = document.getElementById(`${id}_icon`);
  const question = answer.previousElementSibling;

  // Toggle answer visibility
  answer.classList.toggle("hidden");

  // Toggle question active state
  question.classList.toggle("active");

  // Toggle icon
  if (answer.classList.contains("hidden")) {
    icon.src = "./public/landing-page/fqa/arrow-open.svg";
  } else {
    icon.src = "./public/landing-page/fqa/arrow-close.svg";
  }
}
