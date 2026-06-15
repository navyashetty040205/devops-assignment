const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const events = [
  {
    id: 1,
    name: "Hackathon 2026",
    date: "20 June 2026",
    venue: "Main Auditorium"
  },
  {
    id: 2,
    name: "Tech Fest",
    date: "25 June 2026",
    venue: "Seminar Hall"
  },
  {
    id: 3,
    name: "Coding Contest",
    date: "30 June 2026",
    venue: "Computer Lab"
  }
];

app.get("/api/events", (req, res) => {
  res.json(events);
});

app.post("/api/register", (req, res) => {
  res.json({
    success: true,
    message: "Registration Successful!"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});