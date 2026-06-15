const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

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

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.get("/api/announcements", (req, res) => {
  res.json([
    {
      title: "Hackathon registrations are now open"
    },
    {
      title: "Tech Fest volunteers required"
    },
    {
      title: "Coding Contest starts next week"
    }
  ]);
});

app.post("/api/register", (req, res) => {
  const { name, email } = req.body;

  res.json({
    success: true,
    message: `Registration successful for ${name}`
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});