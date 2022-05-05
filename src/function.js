console.log("content-script");

chrome.runtime.onMessage.addListener(goMessage);

function goMessage(msg, sender, sendResponse) {
  if (msg.txt == "ocultar") {
    var side = document.querySelector("#side").parentElement;

    if (side.style.display == "none") {
      side.style.display = "block";
    } else {
      side.style.display = "none";
    }
  }
}
