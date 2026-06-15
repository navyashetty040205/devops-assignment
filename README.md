# Campus Event Hub

## Project Overview

Campus Event Hub is a full-stack web application developed to help students discover, register, and participate in campus events. The application provides event information, club details, announcements, analytics, and student registration through a modern dashboard interface.

The project is developed using Node.js and Express.js for the backend and HTML, CSS, and JavaScript for the frontend. It is containerized using Docker and automated using a Jenkins CI/CD pipeline.

---

## Features

- Event Management Dashboard
- Featured Events Section
- Club Information
- Announcements Panel
- Student Registration
- Analytics Dashboard
- REST API Integration
- Docker Containerization
- Jenkins CI/CD Pipeline

---

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### DevOps Tools
- Git
- GitHub
- Jenkins
- Docker
- Docker Hub

---

## Project Structure

text devops-assignment/ │ ├── public/ │   ├── index.html │   ├── events.html │   ├── analytics.html │   ├── register.html │   ├── style.css │   └── script.js │ ├── app.js ├── package.json ├── Dockerfile ├── Jenkinsfile-docker-push └── README.md 

---

## API Endpoints

### GET APIs

| Endpoint | Description |
|-----------|------------|
| /api/events | Fetch all events |
| /api/stats | Fetch dashboard statistics |
| /api/clubs | Fetch club information |
| /api/announcements | Fetch announcements |
| /api/featured-event | Fetch featured event |

### POST APIs

| Endpoint | Description |
|-----------|------------|
| /api/register | Register a student |

---

## Installation

Clone the repository:

bash git clone https://github.com/navyashetty040205/devops-assignment.git 

Navigate to the project directory:

bash cd devops-assignment 

Install dependencies:

bash npm install 

Run the application:

bash npm start 

Open:

text http://localhost:3000 

---

## Docker Commands

Build Docker Image:

bash docker build -t navyashetty0402/devops-assignment:v2 . 

Run Docker Container:

bash docker run -d --name devops-app -p 3000:3000 navyashetty0402/devops-assignment:v2 

---

## Jenkins CI/CD Pipeline

The Jenkins pipeline performs:

1. Git Version Check
2. Node.js Verification
3. Dependency Installation
4. Code Quality Check using ESLint
5. Docker Image Build
6. Docker Hub Push
7. Automated Deployment

---

## Pipeline Workflow

GitHub Repository
↓
Jenkins Pipeline
↓
Dependency Installation
↓
Code Quality Check
↓
Docker Build
↓
Docker Hub Push
↓
Deployment
↓
Running Application

---

## Author

Navya P Shetty

Information Science and Engineering Student
