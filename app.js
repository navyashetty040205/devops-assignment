const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const events = [
  {
    id: 1,
    name: "Hackathon 2026",
    category: "Technical",
    date: "20 June 2026",
    venue: "Main Auditorium",
    seats: 150
  },
  {
    id: 2,
    name: "UI/UX Workshop",
    category: "Workshop",
    date: "25 June 2026",
    venue: "Lab 3",
    seats: 80
  },
  {
    id: 3,
    name: "Cultural Fest",
    category: "Cultural",
    date: "30 June 2026",
    venue: "Open Ground",
    seats: 300
  }
];

const announcements = [
  "Hackathon registrations open now",
  "Tech Fest volunteers needed",
  "Coding Contest starts next week"
];

const registrations = [];

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/stats", (req, res) => {
  res.json({
    totalEvents: events.length,
    students: 500,
    clubs: 15,
    registrations: registrations.length
  });
});

app.get("/api/announcements", (req, res) => {
  res.json(announcements);
});

app.post("/api/register", (req, res) => {
  registrations.push(req.body);

  res.json({
    success: true,
    message: "Student Registered Successfully"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});