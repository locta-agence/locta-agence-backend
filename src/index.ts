import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import projectRouter from './routes/projectRoutes';
import galleryRouter from './routes/galleryRoutes';
import { connectDB } from './config/database';
import { initializeUsers } from './config/initUsers';

const app = new Hono()


await connectDB();
await initializeUsers();
app.route('/api/auth', authRouter);
app.route('/api/users', userRouter);
app.route('/api/projects', projectRouter);
app.route('/api/galleries', galleryRouter);


const port = 3000
serve(app)
