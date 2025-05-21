const express = require('express');
const app = express();
app.use(express.json());

app.post('/dividir', (req, res) => {
  const { a, b } = req.body;
  if (b === 0) return res.status(400).json({ erro: "Divisão por zero" });
  res.json({ resultado: a / b });
});

app.listen(3004, () => {
  console.log('Divisão Service rodando na porta 3004');
});