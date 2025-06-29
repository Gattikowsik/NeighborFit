# 🏡 NeighborFit – Smart Neighborhood Matcher

**NeighborFit** is a full-stack web application that helps users discover the best neighborhoods in a city based on their lifestyle preferences such as safety, affordability, green spaces, education, transport, nightlife, and tech proximity.

🚀 Built using **React + Node.js + Express + MongoDB**.

---

## 🎯 Features

- 🧠 **Smart Matching Algorithm**: Calculates the best-fit neighborhoods based on weighted scoring.
- 📋 **Interactive Questionnaire**: Collects user preferences through sliders.
- 📊 **Match Results with Pagination**: Displays top 20+ neighborhoods, 5 at a time, with ← / → arrows.
- 🏘️ **Neighborhood Detail View**: Clickable cards to explore deeper information.
- 💾 **LocalStorage Support**: Stores user preferences without requiring login.
- 🔗 **REST API**: Clean, modular Express backend with MongoDB database.
- 🌐 **CORS-enabled** for frontend-backend integration.

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|--------------------------|
| Frontend    | React, CSS (Vanilla)     |
| Backend     | Node.js, Express         |
| Database    | MongoDB Atlas (Mongoose) |
| Hosting     | Render, Vercel |
| State       | useState, useEffect, localStorage |

---

## 🧠 How Matching Works

Each neighborhood has scores (1–5) for 7 lifestyle criteria.

The backend calculates a weighted match score using this formula:

```js
total += prefs[feature] * neighborhood[feature];
max += prefs[feature] * 5;
matchPercent = (total / max) * 100;
 