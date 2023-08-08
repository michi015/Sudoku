const mementos = [];
const inputs = document.querySelectorAll(".tile");

function saveMemento() {
  inputs.forEach(test);
  function test(inputs) {
    mementos.push(inputs.innerText);
  }
}

function undo() {
  const lastMemento = mementos.pop();

  inputs.innerText = lastMemento ? lastMemento : inputs.Text;
}

console.log(inputs);
