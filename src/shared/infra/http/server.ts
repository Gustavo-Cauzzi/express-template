import express from 'express';

const PORT = 3333;
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'up' }).status(200);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT} 🚀🚀`);
});
