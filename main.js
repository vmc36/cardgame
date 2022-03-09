import BoardGame from "./src/components/BoardGame";

const $root = document.querySelector("#app");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame); /* Insere o elemento na tela */
