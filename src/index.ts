import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import authRouter from './routes/authRoutes';
import userRouter from './routes/userRoutes';
import projectRouter from './routes/projectRoutes';
import galleryRouter from './routes/galleryRoutes';
import { connectDB } from './config/database';
import { initializeUsers } from './config/initUsers';
import { cors } from 'hono/cors'
import categoryRouter from './routes/categoryRoutes';
import { run } from './fixtures/projectsFixtures'; 

const app = new Hono();

app.use(cors())

await connectDB();
await initializeUsers();
await run();
app.route('/api/auth', authRouter);
app.route('/api/users', userRouter);
app.route('/api/projects', projectRouter);
app.route('/api/galleries', galleryRouter);
app.route('/api/categories', categoryRouter);

const PORT = process.env.PORT || 3001;

serve({
  fetch: app.fetch,
  port: Number(PORT),
});

console.log(`Server running on http://localhost:${PORT}`);
