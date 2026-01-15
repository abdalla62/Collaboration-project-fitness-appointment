const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


const app = express();

// MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/test", require("./routes/testRoutes"));

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Fitness Appointment Backend is running'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
