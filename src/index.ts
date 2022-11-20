import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port = process.env.PORT || 2500;

app.get('/api/jobs', (req: Request, res: Response) => {
    res.json({ message: 'Get All Jobs' });
});

app.post('/api/jobs', (req: Request, res: Response) => {
    res.json({ message: 'Add New Job' });
});

app.put('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ message: 'Update Job' });
});

app.get('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ message: 'Get Job by Id' });
});

app.delete('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ message: 'Delete Job' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});