document.addEventListener("DOMContentLoaded", () => {
  const btnLogOut = document.getElementById("logOut");
  const btnLogIn = document.getElementById("logIn");
  const btnAdmin = document.getElementById("admin");

  if (localStorage.getItem("token")) {
    btnLogOut.style.display = "block";
    btnLogIn.style.display = "none";
  } else {
    btnLogIn.style.display = "block";
    btnLogOut.style.display = "none";
  }

  if (localStorage.getItem("isAdmin")) {
    btnAdmin.style.display = "block";
  } else {
    btnAdmin.style.display = "none";
  }

  btnLogOut.addEventListener("click", () => {
    localStorage.removeItem("token");

    if (localStorage.getItem("isAdmin")) {
      localStorage.removeItem("isAdmin");
    }

    window.location.href = "/advertisements";
  });
});
