document.addEventListener("DOMContentLoaded", () => {
  const deleteBtns = document.querySelectorAll(".btnDelete");

  deleteBtns.forEach((button) => {
    button.addEventListener("click", () => {
      //récupérer l'id
      const id = button.getAttribute("data-id");

      if (confirm("Voulez-vous vraiment supprimer cette annonce ?")) {
        fetch(`/viewAdmin/${id}`, {
          method: "DELETE",
        })

        .then((response) => {
            if(response.ok) {
                window.location.reload()
            }
            else {
                alert("Echec de la suppression.")
            }
        })
        .catch((error) => {
            console.error(error)
        })
      }
    });
  });
});
