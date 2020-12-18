const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];
let victory = false;

const generateBoard = () => {
  victory = false;
  document.querySelector("#vitoria").setAttribute("hidden", true);

  const board = document.querySelector("#board");

  for (let i = 0; i < map.length; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    let charArr = map[i].split("");
    for (let j = 0; j < charArr.length; j++) {
      const block = document.createElement("div");
      switch (charArr[j]) {
        case "W":
          block.classList.add("wall");
          line.appendChild(block);
          break;
        case " ":
          block.classList.add("path");
          line.appendChild(block);
          break;
        case "S":
          const player = document.createElement("div");
          player.id = "player";
          block.appendChild(player);
          block.classList.add("start");
          line.appendChild(block);
          break;
        case "F":
          block.classList.add("finish");
          line.appendChild(block);
          break;
        default:
      }
    }

    board.appendChild(line);
  }
};

const moveUp = () => {
  // linha de cima
  let up = player.parentElement.parentElement.previousSibling.children;
  // pegar o índice atual
  let iul = 0;
  let arrNextLine = player.parentElement.parentElement.children;
  for (let i = 0; i < arrNextLine.length; i++) {
    if (arrNextLine[i].childElementCount > 0) {
      iul = i;
    }
  }
  if (up[iul].className === "path") {
    up[iul].appendChild(player);
  }
};

const moveDown = () => {
  // linha de baixo
  let down = player.parentElement.parentElement.nextSibling.children;
  // pegar o índice atual
  let idl = 0;
  let arrDownLine = player.parentElement.parentElement.children;
  for (let i = 0; i < arrDownLine.length; i++) {
    if (arrDownLine[i].childElementCount > 0) {
      idl = i;
    }
  }
  if (down[idl].className === "path") {
    down[idl].appendChild(player);
  }
};

const moveLeft = () => {
  let left = player.parentElement.previousSibling;
  if (left.className === "path" || left.className === "start") {
    left.appendChild(player);
  }
};

const moveRight = () => {
  let right = player.parentElement.nextSibling;
  if (right.className === "path" || right.className === "finish") {
    right.appendChild(player);
  }
};

const movePlayer = (key) => {
  switch (key) {
    case "ArrowUp":
      moveUp();
      break;

    case "ArrowDown":
      moveDown();
      break;

    case "ArrowLeft":
      moveLeft();
      break;

    case "ArrowRight":
      moveRight();
      break;

    default:
  }
};

const resetGame = () => {
  const board = document.querySelector("#board");
  board.innerHTML = "";
  generateBoard();
};

const checkVictory = () => {
  if (player.parentElement.className === "finish") {
    victory = true;
    document.querySelector("#vitoria").removeAttribute('hidden');
  }
};

// Start Game
generateBoard();

document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  if (!victory) {
    movePlayer(keyPressed);
    checkVictory();
  }
});

document.querySelector("#reset").addEventListener("click", resetGame);
