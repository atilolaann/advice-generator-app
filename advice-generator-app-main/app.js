const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
const response = await fetch("https://api.adviceslip.com/advice");
const data = await response.json();

adviceText.textContent = data.slip.advice;
adviceId.textContent = data.slip.id;

}
diceBtn.addEventListener("click", getAdvice);
getAdvice();

