const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

// Set up storage for uploaded files
const upload = multer({ dest: 'uploads/' });

app.post('/api/submit-model', upload.fields([
  { name: 'file', maxCount: 1 },
  { name: 'image', maxCount: 1 }
]), (req, res) => {
  const { name, email, desc } = req.body;
  // req.files.file[0] and req.files.image[0] contain file info
  // You can move files, save info to a database, etc.
  // For demo, just log and respond
  console.log({ name, email, desc, files: req.files });
  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));