const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// Endpoint for prediction that forwards the request to the Flask API
app.post('/predict', async (req, res) => {
  try {
    // Forward the request to the Flask API running on localhost:5000
    const response = await axios.post('http://localhost:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Node.js server running on port ${PORT}`);
});
