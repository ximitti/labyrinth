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

    for (let j = 0; j < map[i].length; j++) {
      const block = document.createElement("div");
      switch (map[i][j]) {
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
          const img = document.createElement("img");
          img.src = "./carro.png";
          img.alt = "carro";
          img.width = "20";
          img.height = "20";
          player.id = "player";
          player.setAttribute("class", "right");
          player.appendChild(img);
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
  let up = [...player.parentElement.parentElement.previousSibling.children];
  let arrUpLine = [...player.parentElement.parentElement.childNodes];
  let index = arrUpLine.findIndex((e) => e.childElementCount > 0);

  if (up[index].className === "path") {
    player.setAttribute("class", "up");
    up[index].appendChild(player);
  }
};

const moveDown = () => {
  let down = [...player.parentElement.parentElement.nextSibling.children];
  let arrDownLine = [...player.parentElement.parentElement.childNodes];
  let index = arrDownLine.findIndex((e) => e.childElementCount > 0);

  if (down[index].className === "path") {
    player.setAttribute("class", "down");
    down[index].appendChild(player);
  }
};

const moveLeft = () => {
  let left = player.parentElement.previousSibling;
  if (left.className === "path" || left.className === "start") {
    player.setAttribute("class", "left");
    left.appendChild(player);
  }
};

const moveRight = () => {
  let right = player.parentElement.nextSibling;
  if (right.className === "path" || right.className === "finish") {
    player.setAttribute("class", "right");
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
    document.querySelector("#vitoria").removeAttribute("hidden");
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
