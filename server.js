const express = require('express');
const app = express();
const PORT = 3000;

// Route 1: Simple response
app.get('/simple', (req, res) => {
  res.send('This is a simple response.');
});

// Route 2: Blocking the main thread (simulate CPU-intensive work)
app.get('/block', (req, res) => {
  const start = Date.now();
  // Block the main thread for 5 seconds
  while (Date.now() - start < 90000) {}
  res.send('Main thread was blocked for 30 seconds.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Cpu intensive operations examples
// Heavy Loops / Large Iterations
// Large Prime Number Calculation
// Recursive Calculations (e.g. Fibonacci)
// Hashing / Encryption (especially synchronous)
// Image Processing / Video Encoding
// JSON parsing large payloads