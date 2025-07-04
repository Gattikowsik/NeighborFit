const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
const neighborhoodRoutes = require('./routes/neighborhoods');
app.use('/api/neighborhoods', neighborhoodRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


//app.use('/api/neighborhoods', require('./routes/neighborhood'));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`✅ Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error);
  });
