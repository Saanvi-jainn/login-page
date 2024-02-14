const passwordBtn = document.getElementById("password_eye");
passwordBtn.addEventListener("click", (e) => {
    const passwordInput = document.getElementById("password");
    const icon = passwordBtn.querySelector("i");
    const isVisible = icon.classList.contains("fa-regular fa-eye");
    passwordInput.type = isVisible ? "password":"text"
    icon.setAttribute("class", isVisible ? "fa-regular fa-eye-slash" : "fa-regular fa-eye")
});