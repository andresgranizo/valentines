const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const musicButton = document.getElementById("start-music");
const music = document.getElementById("bg-music");
const welcomeScreen = document.getElementById("welcome-screen");
const cardContainer = document.getElementById("card-container");

let currentPage = 0;
let noClickCount = 0;
const noMessages = ["¿Segura??", "¿Estás segura segura??", "Última opción!"];

musicButton.addEventListener("click", () => {
    music.play();
    welcomeScreen.classList.add("hidden");
    cardContainer.classList.remove("hidden");
});

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.remove("active");
    });

    pages[currentPage].classList.add("active");
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

noButton.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
        noButton.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", () => {
    alert("¡Sabía que dirías que sí!, nos vemos viernes!  ❤️");
});

updatePages();
