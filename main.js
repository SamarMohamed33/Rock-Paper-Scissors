let computerSelection = document.getElementById("computer-selection");
let userSelection = document.getElementById("user-selection");
let rock = document.getElementById("r");
let paper = document.getElementById("p");
let scissors = document.getElementById("s");

let computerScore_value = parseInt(
  document.getElementById("computer-score").textContent
);
let userScore_value = parseInt(
  document.getElementById("user-score").textContent
);
let computerScore_span = document.getElementById("computer-score");
let userScore_span = document.getElementById("user-score");
let word = document.getElementById("myh2");
let ayhaga = document.getElementById("computer-score").textContent;

rock.addEventListener("click", function () {
  game("r");
});
paper.addEventListener("click", function () {
  game("p");
});
scissors.addEventListener("click", function () {
  game("s");
});

function game(user) {
  const computer = computerChoice();

  document.getElementById("user-img").src = `images/${user}.png`;
  document.getElementById("computer-img").src = `images/${computer}.png`;

  if (computer === user) {
    word.innerHTML = "Tie";
    console.log(userScore_value);
    console.log(computerScore_value);
  } else {
    if (user === "r") {
      if (computer === "s") {
        word.innerHTML = "You win";
        userScore_value++;
        userScore_span.innerHTML = `${userScore_value}&nbsp;`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
      if (computer === "p") {
        word.innerHTML = "Computer wins";
        computerScore_value++;
        computerScore_span.innerHTML = `&nbsp;${computerScore_value}`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
    }
    if (user === "p") {
      if (computer === "s") {
        word.innerHTML = "Computer wins";
        computerScore_value++;
        computerScore_span.innerHTML = `&nbsp;${computerScore_value}`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
      if (computer === "r") {
        word.innerHTML = "You win";
        userScore_value++;
        userScore_span.innerHTML = `${userScore_value}&nbsp;`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
    }
    if (user === "s") {
      if (computer === "r") {
        word.innerHTML = "Computer wins";
        computerScore_value++;
        computerScore_span.innerHTML = `&nbsp;${computerScore_value}`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
      if (computer === "p") {
        word.innerHTML = "You win";
        userScore_value++;
        userScore_span.innerHTML = `${userScore_value}&nbsp;`;
        console.log(userScore_value);
        console.log(computerScore_value);
      }
    }
  }
}
function computerChoice() {
  const choices = ["r", "p", "s"];
  const computerSelect = choices[Math.floor(Math.random() * choices.length)];
  console.log("Computer " + computerSelect);
  return computerSelect;
}
