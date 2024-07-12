import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import customerRoutes from './routes/customerRoutes';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

//Routes
app.use('/api/customers',customerRoutes);

export default app;