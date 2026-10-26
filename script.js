
"use strict";

const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const notice = document.getElementById("notice");

function showFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.classList.add("visible");
  input.classList.add("invalid");
  input.setAttribute("aria-invalid", "true");
}

function clearFieldError(input, errorElement) {
  errorElement.textContent = "";
  errorElement.classList.remove("visible");
  input.classList.remove("invalid");
  input.removeAttribute("aria-invalid");
}

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("visible");
}

function clearNotice() {
  notice.textContent = "";
  notice.classList.remove("visible");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearNotice();
  clearFieldError(username, usernameError);
  clearFieldError(password, passwordError);

  let firstInvalidField = null;

  if (!username.value.trim()) {
    showFieldError(
      username,
      usernameError,
      "Introduce tu nombre de usuario, correo o celular."
    );
    firstInvalidField = username;
  }

  if (!password.value) {
    showFieldError(
      password,
      passwordError,
      "Introduce tu contraseña."
    );

    if (!firstInvalidField) {
      firstInvalidField = password;
    }
  }

  if (firstInvalidField) {
    firstInvalidField.focus();
    return;
  }

  /*
   * Esta maqueta no envía ni almacena credenciales.
   * El acceso debe completarse en el sitio oficial.
   */
  showNotice(
    "Continúa en Instagram para completar el inicio de sesión."
  );

  window.location.href = "https://www.instagram.com/accounts/login/";
});

username.addEventListener("input", function () {
  clearFieldError(username, usernameError);
  clearNotice();
});

password.addEventListener("input", function () {
  clearFieldError(password, passwordError);
  clearNotice();
});

document.getElementById("forgotButton").addEventListener("click", function (event) {
  event.preventDefault();
  clearNotice();
  showNotice("Función no disponible. Inténtalo más tarde.");
});

document.getElementById("signupButton").addEventListener("click", function () {
  clearNotice();
  showNotice("Función no disponible. Inténtalo más tarde.");
});

document.getElementById("backButton").addEventListener("click", function () {
  clearNotice();

  if (window.history.length > 1) {
    window.history.back();
  } else {
    showNotice("Función no disponible. Inténtalo más tarde.");
  }
});
