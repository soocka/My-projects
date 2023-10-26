document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const date = document.getElementById("date");
  const application = document.getElementById("application");
  const currentURL = new URL(window.location.href);
  const segments = currentURL.pathname.split("/");
  const advertisementID = segments[segments.length - 1];

  date.value = today.toISOString().slice(0, 10);

  application.addEventListener("submit", (event) => {
    event.preventDefault();

    const subject = document.getElementById("subject").value;
    const content = document.getElementById("content").value;
    const email = document.getElementById("email").value;

    let applicationObj = {
      applicationDate: date.value,
      subject: subject,
      content: content,
      email: email,
      token: localStorage.getItem("token"),
    };

    fetch(`/job_applications/${advertisementID}`, {
      method: "POST",
      body: JSON.stringify(applicationObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/advertisements";
        }
      })
      .catch((error) => console.error(error));
  });
});
