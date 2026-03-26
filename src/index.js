// Immersive Content Ad-Interrupt Fatigue — Entry point
// TODO: Build the core product logic

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ product: 'Immersive Content Ad-Interrupt Fatigue', status: 'pre-mvp' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Immersive Content Ad-Interrupt Fatigue running on port ${PORT}`);
});
