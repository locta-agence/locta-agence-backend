import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import userRouter from './routes/userRoutes';
import projectRouter from './routes/projectRoutes';
import galleryRouter from './routes/galleryRoutes';
import { connectDB } from './config/database';
import { initializeUsers } from './config/initUsers';
import { cors } from 'hono/cors'

const app = new Hono();

app.use(cors())

await connectDB();
await initializeUsers();

app.route('/api/users', userRouter);
app.route('/api/projects', projectRouter);
app.route('/api/galleries', galleryRouter);

const PORT = process.env.PORT || 3001;

serve({
  fetch: app.fetch,
  port: Number(PORT),
});

console.log(`Server running on http://localhost:${PORT}`);
