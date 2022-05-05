
console.log("background script");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    let msg = {
        'txt': 'ocultar'
    };

    chrome.tabs.sendMessage(tab.id, msg);
}
