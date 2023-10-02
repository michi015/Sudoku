//STOPWATCH

const pauseButton = document.querySelector("#pause-button");
const startButton = document.querySelector("#play-button");

const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let counter = -1;
let interval = null;

//event listener
startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
//resetButton.addEventListener("click", reset);

//update the timer
function timer() {
  counter++;

  //format timer
  let mins = Math.floor(counter / 60);
  let secs = counter % 60;

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;

  minutes.innerText = `${mins}`;
  seconds.innerText = `${secs}`;
}
timer();

function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
  startButton.classList.add("hide");
  startButton.classList.remove("active");
  pauseButton.classList.add("active");
  pauseButton.classList.remove("hide");
}

function pause() {
  clearInterval(interval);
  interval = null;
  startButton.classList.remove("hide");
  startButton.classList.add("active");
  pauseButton.classList.remove("active");
  pauseButton.classList.add("hide");
}

function reset() {
  // pause();
  // counter = -1;
  // minutes.innerText = `00`;
  // seconds.innerText = `00`;
  location.reload();
}

//dialog
const resetButton = document.querySelector("#reset-button");
dialog = document.querySelector("dialog");
//const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmResetButton = document.querySelector("#reset");

// "Show the dialog" button opens the dialog modally
resetButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

confirmResetButton.addEventListener("click", () => {
  dialog.close();
  reset();
});
