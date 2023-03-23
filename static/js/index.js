function insertEmailAddress() {
    var email = document.getElementsByClassName("email-address");
    var u = "dc"
    var d = "cako.io"
    var a = u + "@" + d
    
    for (i = 0; i < email.length; i++) {
        email[i].outerHTML = email[i].outerHTML.replace(/name@domain.io/g, a);
    }
}

function navigateLinks(event) {
    const focusedLink = document.querySelector("#links a:focus");
    if (event.key === "ArrowUp") {
        if (focusedLink) {
            focusedLink.parentElement.previousElementSibling?.firstElementChild.focus();
        } else {
            const links = document.querySelectorAll("#links a");
            links[links.length - 1].focus();
        }
    } else if (event.key === "ArrowDown") {
        if (focusedLink) {
            focusedLink.parentElement.nextElementSibling?.firstElementChild.focus();
        } else {
            const links = document.querySelectorAll("#links a");
            links[0].focus();
        }
    } else if (event.key === "Enter") {
        if (focusedLink){
            focusedLink.click();
        }
    }
}

(() => {
    insertEmailAddress();
    document.addEventListener("keydown", navigateLinks);
})();
