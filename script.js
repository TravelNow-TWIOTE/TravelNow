fetch("data/trips.json")
  .then(res => res.json())
  .then(trips => {
    const container = document.getElementById("trip-list");

    trips.forEach(trip => {
      const card = document.createElement("div");
      card.className = "trip-card";
      card.innerHTML = `
        <h2>${trip.title}</h2>
        <p>${trip.dates}</p>
        <p>${trip.summary}</p>
      `;
      card.onclick = () => {
        alert("Trip page coming next!");
      };
      container.appendChild(card);
    });
  });
