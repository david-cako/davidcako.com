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
    document.addEventListener("keydown", navigateLinks);
})();
