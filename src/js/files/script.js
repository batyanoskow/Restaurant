// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

(() => {
    let menuButton = document.querySelector(".menu__button");
    menuButton.addEventListener("click", function (e) {
        let doc = document.querySelector(".body");
        doc.classList.add("dark")
    });
})();