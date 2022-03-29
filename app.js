const my = document.getElementById("me");
const com = document.getElementById("computer");
myScore = parseInt(my.innerText);
comScore = parseInt(com.innerText);

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

const text = document.getElementById("text");

const reset = document.getElementById("reset");

function getComChoice() {
  const choiceArray = ["r", "s", "p"];
  const comNumber = Math.floor(Math.random() * 3);

  return choiceArray[comNumber];
}

function printChoices(myChoice, comChoice) {
  const leftSide = document.getElementById("left");
  const rightSide = document.getElementById("right");
  const leftChoice = document.createElement("i");
  const rightChoice = document.createElement("i");

  const leftExist = leftSide.querySelector("i");
  const rightExist = rightSide.querySelector("i");

  if (leftExist !== null) {
    leftSide.removeChild(leftExist);
    rightSide.removeChild(rightExist);
  }

  if (myChoice === "r") {
    leftChoice.className = "fa-solid fa-hand-back-fist";
  } else if (myChoice === "s") {
    leftChoice.className = "fa-solid fa-hand-scissors";
  } else {
    leftChoice.className = "fa-solid fa-hand";
  }

  if (comChoice === "r") {
    rightChoice.className = "fa-solid fa-hand-back-fist";
  } else if (comChoice === "s") {
    rightChoice.className = "fa-solid fa-hand-scissors";
  } else {
    rightChoice.className = "fa-solid fa-hand";
  }

  leftSide.appendChild(leftChoice);
  rightSide.appendChild(rightChoice);
}

function win() {
  myScore += 1;

  my.innerText = myScore;
  text.innerText = "You Win";
}

function lose() {
  comScore += 1;

  com.innerText = comScore;
  text.innerText = "You lose";
}

function draw() {
  text.innerText = "Draw";
}

function game(myChoice) {
  const comChoice = getComChoice();

  printChoices(myChoice, comChoice);

  console.log(myChoice + comChoice);

  switch (myChoice + comChoice) {
    case "rs":
    case "sp":
    case "pr":
      win();
      break;

    case "rr":
    case "ss":
    case "pp":
      draw();
      break;

    case "rp":
    case "sr":
    case "ps":
      lose();
      break;
  }
}

function setReset() {
  my.innerText = 0;
  com.innerText = 0;
  text.innerText = "Make your choice!";

  myScore = 0;
  comScore = 0;

  const leftSide = document.getElementById("left");
  const rightSide = document.getElementById("right");

  const leftExist = leftSide.querySelector("i");
  const rightExist = rightSide.querySelector("i");

  if (leftExist !== null) {
    leftSide.removeChild(leftExist);
    rightSide.removeChild(rightExist);
  }
}

function main() {
  rock.addEventListener("click", () => game("r"));
  scissors.addEventListener("click", () => game("s"));
  paper.addEventListener("click", () => game("p"));

  reset.addEventListener("click", () => setReset());
}

main();
