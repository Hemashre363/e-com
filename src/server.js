const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fashionista', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
