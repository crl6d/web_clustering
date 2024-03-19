document.addEventListener("DOMContentLoaded", function() {
    const fileElement = document.querySelector(".file");
    const urlElement = document.querySelector(".URL");

    const fileBorder = fileElement.querySelector(".active_border");
    const urlBorder = urlElement.querySelector(".active_border");

    fileElement.addEventListener("mouseenter", function() {
        fileBorder.classList.add("active_border_color");
    });

    fileElement.addEventListener("mouseleave", function() {
        fileBorder.classList.remove("active_border_color");
    });

    urlElement.addEventListener("mouseenter", function() {
        urlBorder.classList.add("active_border_color");
    });

    urlElement.addEventListener("mouseleave", function() {
        urlBorder.classList.remove("active_border_color");
    });
});
