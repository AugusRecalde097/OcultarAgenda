document.addEventListener("keydown", function(e) {
  if (e.altKey && String.fromCharCode(e.keyCode) == 'C')

  {
    let msg ={
      txt: "ocultar"
    }

    goMessage(msg, false, false)

  }
});

console.log("content-script");

chrome.runtime.onMessage.addListener(goMessage);

function goMessage(msg, sender, sendResponse) {
  //alert(msg.txt);
  if (msg.txt == "ocultar") {
    var side = document.querySelector("#side").parentElement;

    if (side.style.display == "none") {
      side.style.display = "block";
    } else {
      side.style.display = "none";
    }
  }
}
