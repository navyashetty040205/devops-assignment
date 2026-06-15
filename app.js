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
  },
  {
    id: 4,
    name: "AI Summit",
    category: "Technical",
    date: "5 July 2026",
    venue: "Seminar Hall",
    seats: 200
  },
  {
    id: 5,
    name: "Sports Meet",
    category: "Sports",
    date: "10 July 2026",
    venue: "Sports Complex",
    seats: 500
  }
];

const announcements = [
  "Hackathon registrations open now",
  "Tech Fest volunteers needed",
  "Coding Contest starts next week",
  "AI Summit registrations open",
  "Sports Meet coming soon"
];

const registrations = [];

/* EVENTS API */
app.get("/api/events", (req, res) => {
  res.json(events);
});

/* DASHBOARD STATS API */
app.get("/api/stats", (req, res) => {
  res.json({
    totalEvents: events.length,
    students: 500,
    clubs: 15,
    registrations: registrations.length
  });
});

/* ANNOUNCEMENTS API */
app.get("/api/announcements", (req, res) => {
  res.json(announcements);
});

/* CLUBS API */
app.get("/api/clubs", (req, res) => {
  res.json([
    {
      name: "Coding Club",
      members: 120
    },
    {
      name: "Design Club",
      members: 80
    },
    {
      name: "Photography Club",
      members: 60
    },
    {
      name: "Dance Club",
      members: 100
    }
  ]);
});

/* FEATURED EVENT API */
app.get("/api/featured-event", (req, res) => {
  res.json({
    name: "Hackathon 2026",
    date: "20 June 2026",
    venue: "Main Auditorium",
    prize: "₹50,000",
    participants: 150
  });
});

/* EVENT CATEGORY ANALYTICS */
app.get("/api/categories", (req, res) => {
  res.json({
    technical: 4,
    workshop: 3,
    cultural: 2,
    sports: 1
  });
});

/* STUDENT REGISTRATION */
app.post("/api/register", (req, res) => {
  const student = req.body;

  registrations.push(student);

  res.json({
    success: true,
    message: "Student Registered Successfully"
  });
});

/* VIEW ALL REGISTRATIONS */
app.get("/api/registrations", (req, res) => {
  res.json(registrations);
});

/* HOME PAGE */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});