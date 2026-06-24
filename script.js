const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

const btn = document.querySelector(".btn");
const emailInput = document.querySelector(".email input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;

  if (email.includes("@") && email.includes(".")) {
    alert("Welcome to Netflix!");
  } else {
    alert("Please enter a valid email address.");
  }
});

const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popup").style.display = "flex";
  });
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

document.querySelectorAll(".question").forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  });
});