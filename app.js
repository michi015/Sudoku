//selectNumber + make background number
let numSelected = null;
function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  //TO DO: deselect number?
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function addNumber() {
  if (numSelected) {
    this.value = numSelected.id;

    // "0-0" "0-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
  }
  if (solution[r][c] == numSelected.id) {
    inputElement.classList.add("board-start");
    console.log("test");
  } else {
    inputElement.classList.remove("board-start");
  }
}

//UNDO one step - not working:

// let inputElement = document.querySelector("inputElement");
// let mementos = [];
// function saveMemento() {
//   mementos.push(inputElement.value);
// }
// function undo() {
//   const lastMemento = mementos.pop();
//   inputElement.value = lastMemento ? lastMemento : inputElement.value;
// }
// document.querySelector("backButton").addEventListener("click", undo)
