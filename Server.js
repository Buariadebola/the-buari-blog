import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors()); // allow all origins (you can restrict later)

const PORT = process.env.PORT || 5000;

app.get('/api/news', async (req, res) => {
  const category = req.query.category || 'politics';
  const apiKey = process.env.NEWS_API_KEY;

  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
