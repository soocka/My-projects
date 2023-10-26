document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const date = document.getElementById("date");
  const createAdvert = document.getElementById("create_advert");

  date.value = today.toISOString().slice(0, 10);

  createAdvert.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const company = document.getElementById("companies").value;
    const wages = document.getElementById("wages").value;
    const place = document.getElementById("place").value;
    const shortDescription = document.getElementById("short-description").value;
    const longDescription = document.getElementById("long-description").value;
    const type = document.getElementById("type").value;

    let advertisement = {
      title: title,
      company: parseInt(company),
      date: date.value,
      wages: wages,
      place: place,
      shortDescription: shortDescription,
      longDescription: longDescription,
      type: type,
    };

    console.log(advertisement);

    fetch(`/advertisements/create`, {
      method: "POST",
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
