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

const copyEmailBtn = document.querySelector(".contact-btn");

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
