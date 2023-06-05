// Declaring variables
const block = document.querySelector(".block");
const body = document.body;
let seconds = 0;

// Event for setting the block at random position
const getRandomDistance = (upper) => Math.floor(Math.random() * upper) + 1;

// Initializing event
const gameStart = () => {
  block.style.top = `${getRandomDistance(600)}px`;
  block.style.left = `${getRandomDistance(1000)}px`;
  block.style.backgroundColor = `${getRandColor()}`;
  body.style.backgroundColor = `${getRandColor()}`;
};

// Window events
// Event fires when window is loaded
window.addEventListener("DOMContentLoaded", gameStart);

// Key event
window.addEventListener("keydown", (ev) => {
//   Checking block position
  checkLose();
  // Moving block on keydown
  if (ev.code === "ArrowUp") {
    block.style.top = `${
      block.getBoundingClientRect().top - block.getBoundingClientRect().height
    }px`;
  } else if (ev.code === "ArrowDown") {
    block.style.top = `${
      block.getBoundingClientRect().top + block.getBoundingClientRect().height
    }px`;
  } else if (ev.code === "ArrowLeft") {
    block.style.left = `${
      block.getBoundingClientRect().left - block.getBoundingClientRect().width
    }px`;
  } else if (ev.code === "ArrowRight") {
    block.style.left = `${
      block.getBoundingClientRect().left + block.getBoundingClientRect().height
    }px`;
  }
  // Setting random colors on body and block as block moves
  block.style.backgroundColor = `${getRandColor()}`;
  body.style.backgroundColor = `${getRandColor()}`;

  // increasing dimensions o the block
  block.style.width = `${block.getBoundingClientRect().width + 3}px`;
  block.style.height = `${block.getBoundingClientRect().height +3}px`;

});
window.addEventListener("keyup",checkLose);



// Updates the seconds taken every seconds
setInterval(() => {
  seconds += 1;
}, 1000);

// Checks if the block is away from sides or not
function checkLose() {
  if (
    block.getBoundingClientRect().top <= 5 ||
    block.getBoundingClientRect().top >=
      body.getBoundingClientRect().height - block.getBoundingClientRect().width ||
    block.getBoundingClientRect().left >=
      body.getBoundingClientRect().width - block.getBoundingClientRect().width ||
    block.getBoundingClientRect().left <= 5
  ) {
    // When block reaches any side
    body.innerHTML = `<h1 class = "result-heading">you lasted ${seconds} seconds</h1>`;
    const replay = confirm("Will you play another round?");
    if (replay) {
      history.go(0);
    }
    
  }
}

// The function for getting random color
function getRandColor() {
  const R = Math.floor(Math.random() * 255) + 1;
  const G = Math.floor(Math.random() * 255) + 1;
  const B = Math.floor(Math.random() * 255) + 1;
  return `rgb(${R},${G},${B})`;
}
