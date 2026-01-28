console.log("app.js is running");

fetch("/api/oura")
  .then(response => {
    console.log("API response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("Oura data:", data);

    if (data.error) {
      document.body.innerHTML +=
        "<p style='color:red'>Error: " + data.error + "</p>";
      return;
    }

    document.body.innerHTML +=
      "<p>Recovery score: " + data.data[0].score + "</p>";
  })
  .catch(error => {
    console.error("Fetch failed:", error);
  });
