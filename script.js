const btnRoll = document.querySelector(".btn--roll"),
  btnNew = document.querySelector(".btn--new"),
  btnHold = document.querySelector(".btn--hold"),
  diceImg = document.querySelector(".dice");

let currentScore = 0,
  activePlayer = 0,
  score = [0, 0],
  gameOver = true;

diceImg.style.display = "none";

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";

    const randomNum = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `./dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 36) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
});

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}
