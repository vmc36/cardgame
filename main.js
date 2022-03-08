import BoardGame from "./src/components/BoardGame";
import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#app");
const $htmlBoardGame = BoardGame(4);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame); /* Insere o elemento na tela */
