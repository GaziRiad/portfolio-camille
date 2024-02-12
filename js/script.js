const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl =
  document.querySelector(".hero-section") ||
  document.querySelector(".hero-common-section");

const copyEmailBtn = document.querySelector(".contact-btn");

const footerLogo = document.getElementById("footerImg");

///////////////////////////////////////////////////////////
// Make mobile navigation work

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  if (headerEl.classList.contains("nav-open"))
    document.documentElement.style.overflowY = "hidden";
  else document.documentElement.style.overflowY = "auto";

  console.log("Humberger button click!");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Make copy email button work

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", function () {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = "hello@camillebrunette.com";

    // Append the textarea to the document
    document.body.appendChild(tempTextArea);

    // Select the text inside the textarea
    tempTextArea.select();

    // Execute the 'copy' command to copy the selected text
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextArea);

    // Optionally, provide user feedback (e.g., alert or change button text)
    alert("Email copied to clipboard!");
  });
}

///////////////////////////////////////////////////////////
// Hover effect on footer Logo

if (footerLogo) {
  footerLogo.addEventListener("mouseover", function () {
    footerLogo.src = "./assets/footer/logotype-footer-hover.png";
  });

  footerLogo.addEventListener("mouseout", function () {
    footerLogo.src = "./assets/footer/logotype-footer.png";
  });
}
