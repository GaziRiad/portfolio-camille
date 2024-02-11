///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open"))
    document.documentElement.style.overflow = "hidden";
  else document.documentElement.style.overflow = "auto";

  console.log(document.html);
  console.log("Humberger button click!");
});

///////////////////////////////////////////////////////////
