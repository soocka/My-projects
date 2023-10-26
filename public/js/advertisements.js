document.addEventListener("DOMContentLoaded", () => {
  const allBtn = document.querySelectorAll("button.btn.btn-primary.btn-show-more");
  const allLinks = document.querySelectorAll(".needLogIn");

  
  if (localStorage.getItem("token")) {
    allBtn.forEach((btn) => {
        btn.style.display = "flex"
    })

    allLinks.forEach((link) => {
        link.style.display = "none"
    })
    
  } else {
    allBtn.forEach((btn) => {
        btn.style.display = "none"
    })

    allLinks.forEach((link) => {
        link.style.display = "flex"
    })
  }

  const showMoreButtons = document.querySelectorAll(".btn-show-more");

  showMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const modalId = `#myModal-${index}`;
      const longDescriptionContent = document.querySelector(`${modalId} .long-description-content`);

      const myModal = new bootstrap.Modal(document.querySelector(modalId));
      myModal._element.addEventListener('hidden.bs.modal', function () {
        longDescriptionContent.innerHTML = "";
        window.location.reload();
      });
      myModal.show();
    });
  });
});



