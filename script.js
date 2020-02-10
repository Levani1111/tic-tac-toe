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

