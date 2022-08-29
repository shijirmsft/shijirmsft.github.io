import { questions } from "./questions-inventory.js";


const shareGameButton = document.querySelector("#share-game");
const shareGameMSStartButton = document.querySelector("#share-game-msstart");
const hijackNavShareButton = document.querySelector("#hijack-navigator-share"); 


function getShareData () {
    const url = document.querySelector("#url-control").value;
    const text = document.querySelector("#text-control").value;
    const title = document.querySelector("#title-control").value;
    const context = document.querySelector("#context-control").value;

    return { url, text, title, context };
}

shareGameButton.addEventListener("click", (event) => {
    const shareData = getShareData();
    navigator.share(shareData);
    console.log("Clicked on " + event.target.id, shareData);
});


shareGameMSStartButton.addEventListener("click", (event) => {
    const shareData = getShareData();

    window.top.postMessage(JSON.stringify(shareData), "*");

    console.log(`Post message`, window.parent, JSON.stringify(shareData));

    if(window["@msstart"] && window["@msstart"].share) {
        window["@msstart"].share(shareData);
    }
    console.log("Clicked on " + event.target.id, shareData);
});


hijackNavShareButton.addEventListener("click", (event) => {
    alert("You've just hijacked native navigator share. This will happen only when MSSTART is enabled!");

    const originalNavShare = window.navigator.share;

    window.navigator.share = function(shareData) {
        window.top.postMessage(JSON.stringify({action: "share", data: shareData}), "*");
    }
});