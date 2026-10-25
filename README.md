#  Pathlume – AI Career & Internship Pathfinding Platform

 **Live Demo:** https://pathlume-xi.vercel.app/

## 📖 About

Pathlume is an AI-powered career and internship platform made for students. The main goal of this project is to help students find internships and job opportunities that match their skills.

Instead of only searching for jobs, users can create a profile, upload their resume, and get AI-powered recommendations. The system compares their skills with the required skills of each opportunity and shows a match percentage. It also tells users which skills they are missing and gives suggestions to improve.

I built this project as a full-stack web application using **Next.js, Express.js, MongoDB, and AI**.

---

##  Features

###  Authentication

- Register with email and password
- Login with email and password
- Google Login
- Demo Login
- Protected routes
- Student and Employer roles

---

###  Opportunity Management

Employers can

- Add new opportunities
- Update opportunities
- Delete opportunities
- Manage all their posted opportunities

Students can

- Browse all opportunities
- View opportunity details
- Read reviews
- Check their AI match score

---

###  Explore Opportunities

Users can

- Search opportunities
- Filter by skills
- Filter by location
- Filter by work type
- Sort by newest
- Sort by highest stipend
- Browse using pagination

---

###  AI Recommendation System

The recommendation system compares

- User profile skills
- Resume skills
- Required opportunity skills

After that, it generates

- Match percentage
- Matching reason
- Missing skills
- Personalized recommendations

The recommendation also becomes better based on user interactions like viewing, saving, or dismissing opportunities.

---

###  AI Resume Analyzer

Users can upload a PDF resume.

The system will

- Read the resume
- Extract important skills
- Create a short experience summary
- Find missing skills
- Suggest improvements
- Generate a downloadable report

---

###  Reviews & Ratings

Students can

- Give ratings
- Write reviews

The average rating updates automatically after every review.

---

###  User Profile

Users can update

- Skills
- Interests
- Experience Level
- Preferred Job Type
- Preferred Location

These details are used by the recommendation system.

---

###  Contact

Visitors can send messages using the contact form.

All messages are stored in the database.

---

##  Technologies Used

### Frontend

- Next.js 15 (App Router)
- JavaScript
- Tailwind CSS
- Framer Motion
- TanStack Query
- React Hook Form
- Recharts
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB Native Driver
- Better Auth
- JWT
- Multer
- pdf-parse

### AI

- Groq API
- Llama 3.3 70B Versatile

### Database

- MongoDB Atlas

### Deployment

Frontend

- Vercel

Backend

- Render

---

##  Project Structure

```
Pathlume

├── pathlume-client
│
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── styles
│   └── utils
│
└── pathlume-server
    ├── src
    ├── routes
    ├── repositories
    ├── services
    ├── middleware
    ├── db
    ├── config
    └── utils
```

---

##  Installation

### Clone the repositories

```bash
git clone <client-repository-url>

git clone <server-repository-url>
```

### Install dependencies

Frontend

```bash
cd pathlume-client
npm install
```

Backend

```bash
cd pathlume-server
npm install
```

---

##  Run the Project

Start the backend

```bash
npm run dev
```

Start the frontend

```bash
npm run dev
```

Then open

```
http://localhost:3000
```

---

##  Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

BETTER_AUTH_SECRET=your_better_auth_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

AI_BASE_URL=https://api.groq.com/openai/v1

AI_MODEL=llama-3.3-70b-versatile

AI_API_KEY=your_groq_api_key
```

---

##  Design

I wanted the website to look modern and attractive, so I used a dark glassmorphism theme with smooth animations.

Some design features are

- Dark UI
- Glass effect cards
- Animated gradient background
- Smooth page transitions
- Hover animations
- Responsive layout
- Mobile friendly design

---

##  Future Improvements

There are still many features that can be added in the future.

- Email notifications
- Save or bookmark opportunities
- Employer dashboard with analytics
- More accurate AI recommendations
- AI interview preparation
- Resume templates
- AI career assistant chatbot

---

##  Author

**Mahbuba Rahman Chowdhury Muna**

Department of Computer Science and Engineering

Metropolitan University, Sylhet
