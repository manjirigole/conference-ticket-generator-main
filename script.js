window.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("avatar-file");
  const previewBox = document.querySelector(".preview-mode");
  const uploadInstructions = document.querySelector(".upload-instructions");
  const avatarImg = document.querySelector(".avatar-preview");

  const condition = document.querySelector(".condition");
  const fname = document.querySelector(".fname-input");
  const email = document.querySelector(".email-input");
  const username = document.querySelector(".username-input");
  const submit = document.querySelector(".btn");
  const form = document.querySelector(".form");

  const fileError = document.querySelector(".upload-div .error-msg");
  const emailError = document.querySelector(".email-div .error-msg");

  const removeBtn = document.querySelector(".btn-remove");
  const changeBtn = document.querySelector(".btn-change");

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500 * 1024) {
        condition.style.display = "none";
        fileError.style.display = "flex";
      } else {
        avatarImg.src = URL.createObjectURL(file);
        previewBox.style.display = "flex";
        uploadInstructions.style.display = "none";
        condition.style.display = "block";
        fileError.style.display = "none"; // hide error
      }
    }
  });

  removeBtn.addEventListener("click", () => {
    fileInput.value = "";
    avatarImg.src = "";
    previewBox.style.display = "none";
    uploadInstructions.style.display = "flex";
    condition.style.display = "block";
    fileError.style.display = "none";
  });

  changeBtn.addEventListener("click", () => {
    fileInput.click();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();

    let hasError = false;

    if (fnameValue === "" || emailValue === "" || usernameValue === "") {
      fname.style.borderColor = "hsl(7, 71%, 60%)";
      email.style.borderColor = "hsl(7, 71%, 60%)";
      username.style.borderColor = "hsl(7, 71%, 60%)";
      hasError = true;
    }

    if (!emailValue.includes("@")) {
      emailError.style.display = "flex";
      hasError = true;
    } else {
      emailError.style.display = "none";
    }

    if (!hasError) {
      document.getElementById("ticket-name").textContent = fnameValue;
      document.getElementById("ticket-email").textContent = emailValue;
      document.getElementById("ticket-fullname").textContent = fnameValue;
      document.getElementById("ticket-username").textContent =
        "@" + usernameValue;
      document.getElementById("ticket-avatar").src = avatarImg.src;

      document.querySelector(".ticket-div").style.display = "flex";
      document.querySelector(".form-div").style.display = "none";
      document.querySelector(".container-header").style.display = "none";
      document.querySelector(".container-p").style.display = "none";

      console.log("Form submitted!");
    }
  });
});
