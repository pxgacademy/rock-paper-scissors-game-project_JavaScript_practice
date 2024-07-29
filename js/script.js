//

let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".image");
const msg = document.querySelector("#msg");
const userScoreBox = document.querySelector("#user_score");
const botScoreBox = document.querySelector("#bot_score");
const msgContainer = document.querySelector("#msg_container");
const resetBtn = document.querySelectorAll(".reset");
const winnerContainer = document.querySelector("#winner_container");
const winnerTitle = document.querySelector("#winner_title");
const userFinalScore = document.querySelector("#userFinalScore");
const botFinalScore = document.querySelector("#botFinalScore");
const display = document.querySelector("#display");

resetBtn.forEach((reset) => {
  reset.addEventListener("click", () => {
    msg.innerText = "Play your move";
    msgContainer.style.backgroundColor = "blueviolet";
    userScoreBox.innerText = 0;
    botScoreBox.innerText = 0;
    userScore = 0;
    botScore = 0;
    winnerContainer.style.display = "none";
    display.style.visibility = "visible";
  });
});

//final winner
let winnerTrophy = (userScore, botScore) => {
  if (userScore >= 10 || botScore >= 10) {
    if (userScore >= 10) {
      display.style.visibility = "hidden";
      winnerContainer.style.display = "block";
      winnerTitle.innerText = `Congratulations!\nYou Won`;
      userFinalScore.innerText = `Your score is: ${userScore}`;
      botFinalScore.innerText = `Bot's score is: ${botScore}`;
    } else {
      display.style.visibility = "hidden";
      winnerContainer.style.display = "block";
      winnerTitle.innerText = `\nBot Won!`;
      userFinalScore.innerText = `Your score is: ${userScore}`;
      botFinalScore.innerText = `Bot's score is: ${botScore}`;
    }
  }
};

const genBotChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  msg.innerText = "Game draw! try again";
  msgContainer.style.backgroundColor = "blueviolet";
};

const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    msg.innerText = `You won! your ${userChoice} beats ${botChoice}`;
    msgContainer.style.backgroundColor = "green";
    userScore++;
    userScoreBox.innerText = userScore;
    winnerTrophy(userScore, botScore);
  } else {
    msg.innerText = `Bot won! ${botChoice} beats your ${userChoice}`;
    msgContainer.style.backgroundColor = "red";
    botScore++;
    botScoreBox.innerText = botScore;
    winnerTrophy(userScore, botScore);
  }
};

const playGame = (userChoice) => {
  const botChoice = genBotChoice();
  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = botChoice === "paper" ? false : true;
      //
    } else if (userChoice === "paper") {
      userWin = botChoice === "rock" ? true : false;
      //
    } else {
      userWin = botChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
