//selectNumber + background
let numSelected = null;
function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
  //TO DO: deselect number?
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
    this.value = numSelected.id;
  } else {
    errors += 1;
    document.getElementById("errors").innerText = errors;
  }
}
