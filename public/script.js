async function loadStats() {

    const response =
    await fetch("/api/stats");
    
    const stats =
    await response.json();
    
    document.getElementById("totalEvents").innerText =
    stats.totalEvents;
    
    document.getElementById("students").innerText =
    stats.students;
    
    document.getElementById("clubsCount").innerText =
    stats.clubs;
    
    document.getElementById("registrations").innerText =
    stats.registrations;
    }
    
    async function loadEvents() {
    
    const response =
    await fetch("/api/events");
    
    const events =
    await response.json();
    
    const container =
    document.getElementById("events");
    
    container.innerHTML = "";
    
    events.forEach(event => {
    
    container.innerHTML += `
    <div class="event-card">
    
    <h3>${event.name}</h3>
    
    <p>📅 ${event.date}</p>
    
    <p>📍 ${event.venue}</p>
    
    <p>🎫 Seats: ${event.seats}</p>
    
    <p>🏷️ ${event.category}</p>
    
    </div>
    `;
    
    });
    }
    
    async function loadFeatured() {
    
    const response =
    await fetch("/api/featured-event");
    
    const event =
    await response.json();
    
    document.getElementById("featured").innerHTML = `
    <div class="featured-card">
    
    <h2>🔥 Featured Event</h2>
    
    <h1>${event.name}</h1>
    
    <p>📅 ${event.date}</p>
    
    <p>📍 ${event.venue}</p>
    
    <p>🏆 Prize Pool: ${event.prize}</p>
    
    <p>👥 Participants: ${event.participants}</p>
    
    </div>
    `;
    }
    
    async function loadClubs() {
    
    const response =
    await fetch("/api/clubs");
    
    const clubs =
    await response.json();
    
    const container =
    document.getElementById("clubs");
    
    container.innerHTML = "";
    
    clubs.forEach(club => {
    
    container.innerHTML += `
    <div class="event-card">
    
    <h3>${club.name}</h3>
    
    <p>👥 Members: ${club.members}</p>
    
    </div>
    `;
    
    });
    }
    
    async function loadAnnouncements() {
    
    const response =
    await fetch("/api/announcements");
    
    const announcements =
    await response.json();
    
    const container =
    document.getElementById("announcements");
    
    container.innerHTML = "<ul>";
    
    announcements.forEach(item => {
    
    container.innerHTML += `
    <li>${item}</li>
    `;
    
    });
    
    container.innerHTML += "</ul>";
    }
    
    async function registerStudent() {
    
    const name =
    document.getElementById("name").value;
    
    const email =
    document.getElementById("email").value;
    
    if(!name || !email){
    
    alert("Please fill all fields");
    
    return;
    }
    
    const response =
    await fetch("/api/register",{
    
    method:"POST",
    
    headers:{
    "Content-Type":"application/json"
    },
    
    body:JSON.stringify({
    name,
    email
    })
    });
    
    const result =
    await response.json();
    
    document.getElementById("message").innerText =
    result.message;
    
    loadStats();
    }
    
    loadStats();
    loadEvents();
    loadFeatured();
    loadClubs();
    loadAnnouncements();