const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHeroEl =
  document.querySelector(".hero-section") ||
  document.querySelector(".hero-common-section") ||
  document.querySelector(".template-hero-section");

const allSections = document.querySelectorAll("section, footer");

const projectImgs = document.querySelectorAll("img[data-src]");

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
    // rootMargin: "0px",
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
    footerLogo.src = "../assets/footer/logotype-footer-hover.png";
  });

  footerLogo.addEventListener("mouseout", function () {
    // footerLogo.src = "./assets/footer/logotype-footer.png";
    footerLogo.src = "../assets/footer/logotype-footer.png";
  });
}

// Reveal section on scroll

const sectionReveal = function (entries, observer) {
  const [entry] = entries;

  // Guard clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
  section.style.transition = "all 1s ease";
});

//////////////////////

//////////////////////
// Lazy img loading (for a great performance)

const imgLazyLoading = function (entries, observer) {
  const [entry] = entries;

  // Guard clause: otherwise the first target would appear without even being intersected
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(imgLazyLoading, {
  root: null,
  threshold: 0,
});
projectImgs.forEach((img) => imgObserver.observe(img));
