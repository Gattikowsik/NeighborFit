# 🏡 NeighborFit – Smart Neighborhood Matcher

**NeighborFit** is a full-stack web application that helps users discover the best neighborhoods in a city (starting with Bangalore) based on their lifestyle preferences — such as safety, affordability, green spaces, education, transport, nightlife, and tech proximity.

🔗 **Live Demo**: [https://neighborfit-blond.vercel.app/](https://neighborfit-blond.vercel.app/)  

---

## 🚀 Tech Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Frontend   | React, Vanilla CSS                  |
| Backend    | Node.js, Express                    |
| Database   | MongoDB Atlas (with Mongoose)       |
| State Mgmt | `useState`, `useEffect`, `localStorage` |
| Hosting    | Vercel (Frontend), Render (Backend) |

---

## 🎯 Key Features

- 🧠 **Smart Matching Algorithm**  
  Calculates best-fit neighborhoods using weighted preference scoring.

- 📋 **Interactive Questionnaire**  
  Users input their preferences via responsive sliders.

- 📊 **Paginated Match Results**  
  Shows top 20+ neighborhood matches, 5 at a time with ← / → arrows.

- 🏘️ **Neighborhood Detail View**  
  Clickable cards give deeper insights into each locality.

- 🔍 **Smart Search with Auto-Suggestions**  
  Real-time suggestions and direct navigation to detail pages.

- 💾 **LocalStorage Support**  
  Stores user preferences and session info client-side (no login required).

- 🔐 **Auth System**  
  Signup/login functionality with toast notifications and logout state.

- 🔗 **RESTful API**  
  Modular Express API with routes for matching and neighborhood data.

- 🌐 **CORS-Enabled & Full Integration**  
  Seamless communication between frontend and backend.

---

## 🧠 Matching Logic

Each neighborhood has scores between **1–5** for the 7 lifestyle criteria.  
The backend calculates the match percentage using:

```js
total += prefs[feature] * neighborhood[feature];
max += prefs[feature] * 5;
matchPercent = (total / max) * 100;
