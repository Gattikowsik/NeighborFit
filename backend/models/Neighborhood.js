const mongoose = require('mongoose');

const NeighborhoodSchema = new mongoose.Schema({
  id: String,
  name: String,
  safety: Number,
  affordability: Number,
  transport: Number,
  greenSpaces: Number,
  nightlife: Number,
  education: Number,
  techProximity: Number
}, { collection: 'neighborhoods' }); // 👈 force exact collection name

module.exports = mongoose.model('Neighborhood', NeighborhoodSchema);
