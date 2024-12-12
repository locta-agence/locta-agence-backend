import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import userRouter from './routes/userRoutes';
import { connectDB } from './config/database';
import { initializeUsers } from './config/initUsers';

const app = new Hono()


await connectDB();
await initializeUsers();
app.route('/api/users', userRouter);


const port = 3000
serve(app)
