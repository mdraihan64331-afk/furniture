// ============toggle bar start================
// let menu = document.querySelector("#menu");

function menuBar(){
    document.getElementById("menu").classList.toggle("show");
};







// ============toggle bar end================

// ============slider start================

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.querySelector(".card-wrapper");

next.addEventListener("click", () => {
    slider.scrollLeft += 320;
});

prev.addEventListener("click", () => {
    slider.scrollLeft -= 320;
});

// ============slider end================