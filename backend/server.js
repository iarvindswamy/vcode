const express = require('express');
const cors = require('cors');
const path = require('path');
// server.js

const app = require('./app'); // Import the Express app from app.js
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


