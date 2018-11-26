//Created by Alex Morgan (alexm.xyz). Please do not re-use without permission.

// Called when the user clicks on the browser action.


chrome.commands.onCommand.addListener(function (command) {
        console.log('Command:', command)
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            var tab = tabs[0];
            chrome.tabs.update(tab.id, {url: "https://search.easyvoice.xyz/go"});
        })
});

// Check whether new version is installed
////chrome.runtime.onInstalled.addListener(function (details) {
//    if (details.reason == "install") { //When extension is first installed
//        window.open("https://search.easyvoice.xyz/");
//    } else if (details.reason == "update") {
//        window.open("https://search.easyvoice.xyz/updated");
//        /*var notification = new Notification('EasyVoice Search', {
//         icon: 'img/128.png',
//         body: "EasyVoice Search has been updated. Click to see the changes.",
//         });
//         
//         notification.onclick = function () {
//         window.open("https://easyvoice.xyz/search/updated");      
//         };*/
//    }
//});