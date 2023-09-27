let numSelected = null;

let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];

let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

window.onload = function () {
  setGame();
};

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // Board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      //linien in der mitte
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }

      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
}

//nimmt die Nummer der Zahlen unten
function selectNumber() {
  //toggle selected

  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this; //this referse to the div itself!?
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (
      this.classList.contains("tile-start") ||
      this.classList.contains("tile-right")
    ) {
      return;
    }
    this.innerText = numSelected.id;

    let coords = this.id.split("-"); //"0-0" "0-1" wird ["0", "0"]
    console.log(coords);
    console.log(this.id);
    let r = parseInt(coords[0]); //gibt strings - parse int macht number
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
      this.classList.add("tile-start");
      this.classList.remove("tile-wrong");
    } else {
      this.innerText = numSelected.id;
      this.classList.add("tile-wrong");
    }
    // ????
    if (board[r][c] === solution[r][c]) {
      alert("you won");
    }
  }
}

//Hint
let hintButton = document.querySelector(".hint-button");
hintButton.addEventListener("click", giveHint);

function giveHint() {
  window.open(
    "https://sudoku.com/how-to-play/sudoku-rules-for-complete-beginners/",
    "_blank"
  );
}

//Erase
let eraseButton = document.querySelector(".erase-button");
eraseButton.addEventListener("click", eraseAll);

function eraseAll() {
  let filledTiles = document.querySelectorAll(".tile-wrong, .tile-right");
  console.log(filledTiles);
  filledTiles.forEach((item) => {
    item.innerText = "";
    item.classList.remove("tile-wrong");
    item.classList.remove("tile-right");
  });
  // location.reload();
}

//solve
let solveButton = document.querySelector(".solve-button");
solveButton.addEventListener("click", solveGame);

function solveGame() {
  let tile = document.querySelectorAll(".tile");

  for (let element of tile) {
    tile.style.background = "";
  }
}
