function encodeCharacterEntities(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/g, i => '&#' + i.charCodeAt(0) + ';');
}

function insertEmailAddress() {
    var email = document.getElementById("email-address").firstElementChild;
    var u = "dc";
    var d = "cako.io";
    var a = u + "@" + d;

    const encoded = encodeCharacterEntities(a);

    email.outerHTML = email.outerHTML.replace(/name@domain.io/g, encoded);
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
        if (focusedLink) {
            focusedLink.click();
        }
    }
}

(() => {
    insertEmailAddress();
    document.addEventListener("keydown", navigateLinks);
})();
