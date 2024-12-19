let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("#choice");
const mgs=document.querySelector("#mgs");
const userScorePara=document.getElementById("user-score");
const compScorePara=document.getElementById("comp-score");

const genCompChoice = () => {
  let option = ["rock", "paper", "scissors"];
  const randomnum = Math.floor(Math.random() * 3);
  return option[randomnum];
};
const drawGame = () => {
  console.log("game was draw");
  mgs.innerText= "Game was draw!";
  mgs.style.backgroundColor="pink"
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;

    console.log("you win");
    mgs.innerText= "You Win!";
    mgs.style.backgroundColor="green"
  } else {
    compScore++;
    compScorePara.innerText=compScore;

    console.log("computer wins");
    mgs.innerText= "you loose";
    mgs.style.backgroundColor="red"
  }
};

const playGame = (userChoice) => {
  console.log("userChoice=", userChoice);

const compChoice = genCompChoice();
console.log("compChoice=", compChoice);

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
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("class");
    playGame(userChoice);
    console.log("choice was clicked");
  });
});
