console.log("JS file loaded!");  // debug check

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mgs = document.querySelector("#mgs");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomnum = Math.floor(Math.random() * 3);
  return option[randomnum];
};

const drawGame = () => {
  mgs.innerText = "Game was a draw!";
  mgs.style.backgroundColor = "pink";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    mgs.innerText = "You win!";
    mgs.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    mgs.innerText = "You lose!";
    mgs.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("User:", userChoice, "Comp:", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    playGame(userChoice);
  });
});
