import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const PORT=3000;

//Get that returns object with name and age
app.get('/', (req: Request, res: Response) => {
  res.json({ name: 'John Doe', age: 30 });
});

//get/users 
app.post('/users', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 }
  ]);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}  );
