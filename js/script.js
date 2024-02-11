///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open"))
    document.documentElement.style.overflowY = "hidden";
  else document.documentElement.style.overflowY = "auto";

  console.log("Humberger button click!");
});

///////////////////////////////////////////////////////////
