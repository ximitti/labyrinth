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

const generateBoard = () => {
  const board = document.querySelector("#board");

  for (let i = 0; i < map.length; i++) {
    const line = document.createElement("div");
    line.className = "line";
    let charArr = map[i].split("");
    for (let j = 0; j < charArr.length; j++) {
      const block = document.createElement("div");
      switch (charArr[j]) {
        case "W":
          block.className = "wall";
          line.appendChild(block);
          break;
        case " ":
          block.className = "path";
          line.appendChild(block);
          break;
        case "S":
          const player = document.createElement("div");
          player.id = "player";
          block.appendChild(player);
          block.className = "start";
          line.appendChild(block);
          break;
        case "F":
          block.className = "finish";
          line.appendChild(block);
          break;
        default:
      }
    }

    board.appendChild(line);
  }
};
generateBoard();

const startPath = document.querySelector(".start");
const endPath = document.querySelector(".finish");

document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  console.log("keydown event\n\n" + "key: " + keyName);


  // capturar o parente da div do player
  // para movimentos laterais, capturar o irmão (sibling) e verificar se não é
  // muro
  // para movimentos verticais, capturar o pai do pai, capturar o irmão (próximo ou anterior), descer para o filho e verificar se é muro ou não
});
