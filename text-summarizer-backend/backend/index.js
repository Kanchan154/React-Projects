const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    // Dummy summarization (you can use OpenAI API here)
    const summary = text.split('.').slice(0, 2).join('.') + '.';
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: 'Summarization failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
