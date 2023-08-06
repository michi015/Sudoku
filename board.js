const gameBoard = document.querySelector("#gameboard");
const squares = 9;

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

//grid and lines
for (let r = 0; r < squares; r++) {
  for (let c = 0; c < squares; c++) {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("min", "1");
    inputElement.setAttribute("max", "9");
    //inputElement.setAttribute("maxlength", "1");
    inputElement.id = r.toString() + " - " + c.toString();
    if (board[r][c] != "-") {
      inputElement.value = board[r][c];
      inputElement.classList = "board-start";
    }
    if (r == 2 || r == 5) {
      inputElement.classList.add("horizontal-line");
    }
    if (c == 2 || c == 5) {
      inputElement.classList.add("vertical-line");
    }
    //TO DO: Kästchen bunt statt Linien;
    inputElement.addEventListener("click", addNumber);
    gameBoard.appendChild(inputElement);
  }
}

//zahlen unter dem board
function setGame() {
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.querySelector(".numbers").appendChild(number);
  }
}
setGame();
