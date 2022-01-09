var header = document.querySelector("header");

const fileAttachment = document.getElementById("Attachment");
const fileBtn = document.getElementById("file-button");
const fileTxt = document.getElementById("file-text");

// Sticky Header
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Responsive Header
function toggle() {
    header.classList.toggle("active");
}

// Upload File in Contact Form
fileBtn.addEventListener("click", function() {
  fileAttachment.click();
});

fileAttachment.addEventListener("change", function() {
  if (fileAttachment.value) {
    fileTxt.innerHTML = fileAttachment.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    fileTxt.innerHTML = "No file chosen";
  }
});
