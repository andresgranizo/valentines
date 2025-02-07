const music = document.getElementById("bg-music");
const musicButton = document.getElementById("start-music");
const welcomeScreen = document.getElementById("welcome-screen");
const cardContainer = document.getElementById("card-container");

// Iniciar música y mostrar carta después del clic
musicButton.addEventListener("click", () => {
    music.play();
    welcomeScreen.classList.add("hidden");
    cardContainer.classList.remove("hidden");
});

// Sistema de páginas en la carta
const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPage = 0;

function updatePages() {
    pages.forEach((page, index) => {
        page.classList.toggle("active", index === currentPage);
    });

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

updatePages();
