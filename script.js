let boxes = document.querySelectorAll(".boxes");
let resetButton = document.querySelector(".reset");
let redClick = document.querySelector(".fillCo");
let divs = document.querySelector("div");
let currentPlay = 0;
let winningCombos = [[0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 5, 8],[2, 4, 6],[3, 4, 5]
];

for (i = 0; i < boxes.length; i++) {
  boxes[i].dataset.isClicked = "false";
  boxes[i].addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.dataset.isClicked == "false") {
      if (currentPlay % 2 === 0) {
        e.target.style.backgroundColor = "red";
        currentPlay++;
       
        checkWinner();
      } else if (currentPlay % 2 !== 0) {
        e.target.style.backgroundColor = "blue";
        currentPlay++;
        
        checkWinner();
      }
      e.target.dataset.isClicked = "true";
    }
  });
}

resetButton.addEventListener("click", function(e) {
  e.preventDefault();
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "";
    boxes[i].style.pointerEvent = "auto";
    boxes[i].dataset.isClicked = "false";
  }
});
// this function is checking winner
function checkWinner() {
  console.log("checking for the  winner");
  console.log(boxes);
  console.log(boxes[0]);
  console.log(boxes[0].style.backgroundColor);
  if (
    (boxes[0].style.backgroundColor === "red" &&
      boxes[1].style.backgroundColor === "red" &&
      boxes[2].style.backgroundColor === "red") ||
    (boxes[0].style.backgroundColor === "red" &&
      boxes[3].style.backgroundColor === "red" &&
      boxes[6].style.backgroundColor === "red") ||
    (boxes[0].style.backgroundColor === "red" &&
      boxes[4].style.backgroundColor === "red" &&
      boxes[8].style.backgroundColor === "red") ||
    (boxes[1].style.backgroundColor === "red" &&
      boxes[4].style.backgroundColor === "red" &&
      boxes[7].style.backgroundColor === "red") ||
    (boxes[2].style.backgroundColor === "red" &&
      boxes[5].style.backgroundColor === "red" &&
      boxes[8].style.backgroundColor === "red") ||
    (boxes[3].style.backgroundColor === "red" &&
      boxes[4].style.backgroundColor === "red" &&
      boxes[5].style.backgroundColor === "red") ||
    (boxes[2].style.backgroundColor === "red" &&
      boxes[4].style.backgroundColor === "red" &&
      boxes[6].style.backgroundColor === "red") ||
    (boxes[6].style.backgroundColor === "red" &&
      boxes[7].style.backgroundColor === "red" &&
      boxes[8].style.backgroundColor === "red")
  ) {
    alert("RED WINS! Press reset and try again!");
  } else if (
    (boxes[0].style.backgroundColor === "blue" &&
      boxes[1].style.backgroundColor === "blue" &&
      boxes[2].style.backgroundColor === "blue") ||
    (boxes[0].style.backgroundColor === "blue" &&
      boxes[3].style.backgroundColor === "blue" &&
      boxes[6].style.backgroundColor === "blue") ||
    (boxes[0].style.backgroundColor === "blue" &&
      boxes[4].style.backgroundColor === "blue" &&
      boxes[8].style.backgroundColor === "blue") ||
    (boxes[1].style.backgroundColor === "blue" &&
      boxes[4].style.backgroundColor === "blue" &&
      boxes[7].style.backgroundColor === "blue") ||
    (boxes[2].style.backgroundColor === "blue" &&
      boxes[5].style.backgroundColor === "blue" &&
      boxes[8].style.backgroundColor === "blue") ||
    (boxes[3].style.backgroundColor === "blue" &&
      boxes[4].style.backgroundColor === "blue" &&
      boxes[5].style.backgroundColor === "blue") ||
    (boxes[2].style.backgroundColor === "blue" &&
      boxes[4].style.backgroundColor === "blue" &&
      boxes[6].style.backgroundColor === "blue") ||
    (boxes[6].style.backgroundColor === "blue" &&
      boxes[7].style.backgroundColor === "blue" &&
      boxes[8].style.backgroundColor === "blue")
  ) {
    alert("BLUE WINS! Press reset and try  again!");
  } else if (
    boxes[0].style.backgroundColor !== "" &&
    boxes[1].style.backgroundColor !== "" &&
    boxes[2].style.backgroundColor !== "" &&
    boxes[3].style.backgroundColor !== "" &&
    boxes[4].style.backgroundColor !== "" &&
    boxes[5].style.backgroundColor !== "" &&
    boxes[6].style.backgroundColor !== "" &&
    boxes[7].style.backgroundColor !== "" &&
    boxes[8].style.backgroundColor !== ""
  ) {
    alert("It's a TIE! Press reset and try  again!");
  }
}

