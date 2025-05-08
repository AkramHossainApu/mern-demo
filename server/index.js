// server/index.js
require('dotenv').config();               // ← load .env first :contentReference[oaicite:4]{index=4}
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)         // uses Atlas URI from .env :contentReference[oaicite:5]{index=5}
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('Mongo error:', err));

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,                // :contentReference[oaicite:6]{index=6}
  useUnifiedTopology: true,             // :contentReference[oaicite:7]{index=7}
});
