/* eslint-env browser */

let allEvents = [];

loadDashboard();

async function loadDashboard() {
  loadStats();
  loadEvents();
  loadAnnouncements();

  document.getElementById("today").innerText =
    new Date().toDateString();
}

async function loadStats() {
  const res = await fetch("/api/stats");
  const stats = await res.json();

  document.getElementById("eventsCount").innerText =
    stats.totalEvents;

  document.getElementById("studentsCount").innerText =
    stats.students;

  document.getElementById("clubsCount").innerText =
    stats.clubs;

  document.getElementById("regCount").innerText =
    stats.registrations;
}

async function loadEvents() {
  const res = await fetch("/api/events");
  const events = await res.json();

  allEvents = events;

  displayEvents(events);
}

function displayEvents(events) {
  const container =
    document.getElementById("events");

  container.innerHTML = "";

  events.forEach(event => {
    container.innerHTML += `
      <div class="event-card">
        <span class="badge">
          ${event.category}
        </span>

        <h3>${event.name}</h3>

        <p>📅 ${event.date}</p>
        <p>📍 ${event.venue}</p>
        <p>🪑 Seats Left: ${event.seats}</p>

        <button class="event-btn">
          Register
        </button>
      </div>
    `;
  });
}

function searchEvents() {
  const keyword =
    document.getElementById("search")
    .value
    .toLowerCase();

  const filtered =
    allEvents.filter(event =>
      event.name.toLowerCase().includes(keyword)
    );

  displayEvents(filtered);
}

async function loadAnnouncements() {
  const res =
    await fetch("/api/announcements");

  const data =
    await res.json();

  const box =
    document.getElementById("announcements");

  box.innerHTML = "";

  data.forEach(item => {
    box.innerHTML += `<li>${item}</li>`;
  });
}

async function registerStudent() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const department =
    document.getElementById("department").value;

  const year =
    document.getElementById("year").value;

  if (
    !name ||
    !email ||
    !department ||
    !year
  ) {
    alert("Fill all fields");
    return;
  }

  const response = await fetch(
    "/api/register",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        department,
        year
      })
    }
  );

  const data =
    await response.json();

  document.getElementById(
    "message"
  ).innerText = data.message;

  loadStats();
}