document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на элементы с классами file и URL
    const fileElement = document.querySelector(".file");
    const urlElement = document.querySelector(".URL");

    // Получаем ссылки на элементы с классом active_border
    const fileBorder = fileElement.querySelector(".active_border");
    const urlBorder = urlElement.querySelector(".active_border");

    // Добавляем обработчики событий для элементов
    fileElement.addEventListener("mouseenter", function() {
        // Добавляем класс active_border_color при наведении на элемент file
        fileBorder.classList.add("active_border_color");
    });

    fileElement.addEventListener("mouseleave", function() {
        // Убираем класс active_border_color при уходе с элемента file
        fileBorder.classList.remove("active_border_color");
    });

    urlElement.addEventListener("mouseenter", function() {
        // Добавляем класс active_border_color при наведении на элемент URL
        urlBorder.classList.add("active_border_color");
    });

    urlElement.addEventListener("mouseleave", function() {
        // Убираем класс active_border_color при уходе с элемента URL
        urlBorder.classList.remove("active_border_color");
    });
});