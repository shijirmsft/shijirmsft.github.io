import { questions } from "./questions-inventory.js";


const shareGameButton = document.querySelector("#share-game");
const shareGameMSStartButton = document.querySelector("#share-game-msstart");

shareGameButton.addEventListener("click", (event) => {
    console.log("Clicked on " + event.target.id);
});


shareGameMSStartButton.addEventListener("click", (event) => {
    console.log("Clicked on " + event.target.id);
});