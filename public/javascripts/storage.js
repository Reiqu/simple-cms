window.onload = init;
function init() {
    document.getElementById("send-button").addEventListener("click", savePage);
}


function savePage(data) {
    let title = document.getElementById("title").value;
    let subtitle = document.getElementById("subtitle").value;
    let content = document.getElementById("content").value;
    localStorage.setItem(title + "-title", title);
    localStorage.setItem(title + "-subtitle", subtitle);
    localStorage.setItem(title + "-content", content);
    return console.log("Added to localstorage");
}
function getPage(title) {
    let data = [];
    for (let index = 0; index < localStorage.length;index++) {
        let title = localStorage.key(0);
        console.log(title);
    }
}
