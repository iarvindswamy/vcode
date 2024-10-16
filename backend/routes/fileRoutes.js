const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    // Use current timestamp + original extension for unique file names
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize multer with storage configuration
const upload = multer({ storage });

// POST route to handle file uploads
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({
      message: 'No file uploaded',
    });
  }

  // Respond with success message and file details
  res.status(200).json({
    message: 'File uploaded successfully!',
    fileName: req.file.filename,
    filePath: `/uploads/${req.file.filename}`,
  });
});

module.exports = router;
