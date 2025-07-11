const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'https://expenaaa.vercel.app'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // allow preflight

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/profile', profileRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

module.exports = app;
