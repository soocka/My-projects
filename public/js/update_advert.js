document.addEventListener("DOMContentLoaded", function () {
    const updateAdvert = document.getElementById("update_advert");
    const currentURL = new URL(window.location.href);
    const segments = currentURL.pathname.split("/");
    const advertisementID = segments[segments.length - 1];
  
    updateAdvert.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const title = document.getElementById("title").value;
      const company = document.getElementById("companies").value;
      const wages = document.getElementById("wages").value;
      const place = document.getElementById("place").value;
      const shortDescription = document.getElementById("short-description").value;
      const longDescription = document.getElementById("long-description").value;
      const type = document.getElementById("type").value;
      const date = document.getElementById("date").value;

      let advertisement = {
        title: title,
        company: parseInt(company),
        date: date,
        wages: wages,
        place: place,
        shortDescription: shortDescription,
        longDescription: longDescription,
        type: type,
      };
  
      console.log(advertisement);
  
      fetch(`/advertisements/update/${advertisementID}`, {
        method: "PUT",
        body: JSON.stringify(advertisement),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if(response.ok){
              window.location.href="/advertisements"
          }
        })
        .catch((error) => console.error(error));
    });
  });
  