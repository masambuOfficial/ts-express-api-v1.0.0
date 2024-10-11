import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Basic API route
app.get('/api/greet/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Fallback route to serve index.html for all other routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
