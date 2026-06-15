/* eslint-env browser */

document.getElementById("today").innerText =
"📅 " + new Date().toDateString();

async function loadEvents() {

    const response = await fetch("/api/events");

    const events = await response.json();

    document.getElementById("count").innerText =
    events.length;

    const container =
    document.getElementById("events");

    container.innerHTML = "";

    events.forEach(event => {

        container.innerHTML += `
        <div class="event-card">
            <h2>${event.name}</h2>
            <p>📂 ${event.category}</p>
            <p>📅 ${event.date}</p>
            <p>📍 ${event.venue}</p>
            <p>🪑 Seats: ${event.seats}</p>
        </div>
        `;
    });
}

function registerStudent() {

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    if(name === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("message").innerText =
    "✅ Registration Successful!";
}