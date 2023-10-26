document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const alertMessage = document.getElementById("alert-message");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche la page de se recharger
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message) {
          alertMessage.textContent = data.message;
          return;
        }
        alertMessage.textContent = "";
        localStorage.setItem("token", data.token); //stock le token

        if (data.isAdmin) {
          localStorage.setItem("isAdmin", data.isAdmin);
          //to do: redirection vers la page admin 
        }

        //redirection vers la page advert
        window.location.href="/advertisements"
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
