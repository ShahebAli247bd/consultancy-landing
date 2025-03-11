/**
 * Check scrren size to make Mobile menu on
 */
let searchButton = document.querySelector("#search");
function handleMatchMedia() {
    const matchMedia = window.matchMedia("(max-width:600px)");
    const headerArea = document.querySelector(".header-area");
    const mobileMenu = document.getElementById("mobile-menu");

    if (matchMedia.matches) {
        //add show class on resize and match the mobile device
        headerArea.classList.remove("show");

        //add mobile menu if resize and match mobile device
        mobileMenu.innerText = "menu";
        console.log("match media:" + matchMedia.matches);
    } else {
        searchButton.nextElementSibling?.remove();
        //remove show class on resize and match the mobile device
        headerArea.classList.add("show");

        //add close button on resize
        mobileMenu.innerText = "close";
        console.log("Not matched media:" + matchMedia.matches);
    }
}
window.addEventListener("resize", handleMatchMedia);

/**
 *  Add class to mobile Menu Bar
 */

const mobileMenu = document.getElementById("mobile-menu");
function handleShowMobileMenu() {
    if (this.parentElement.classList.contains("show")) {
        this.innerText = "menu";
    } else {
        this.innerText = "close";
    }
    this.parentElement.classList.toggle("show");
    searchButton.nextElementSibling?.remove();
}
mobileMenu.addEventListener("click", handleShowMobileMenu);

/**
 * Search Icon and Search Input handler
 */

const search = document.getElementById("search");

function handleSearchInput() {
    let input = document.querySelector("#searchInput");
    console.log(input?.value);
    if (
        !this.nextElementSibling ||
        this.nextElementSibling.tagName !== "INPUT"
    ) {
        input = document.createElement("input");
        input.placeholder = "Search...";
        input.type = "text";
        input.id = "searchInput";
        input.value = "";
        input.style.marginLeft = "10px";

        this.parentElement.appendChild(input);
        input.focus();
    }

    if (input.value) {
        return input.value;
    }
}
search.addEventListener("click", handleSearchInput);
