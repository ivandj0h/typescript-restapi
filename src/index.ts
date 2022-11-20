import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port = process.env.PORT || 2500;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});