import { Hono } from 'hono'
import authRouter from '../../src/routes/authRoutes';
import userRouter from '../../src/routes/userRoutes';
import projectRouter from '../../src/routes/projectRoutes';
import galleryRouter from '../../src/routes/galleryRoutes';
import { connectDB } from '../../src/config/database';
import { initializeUsers } from '../../src/config/initUsers';
import { cors } from 'hono/cors'
import categoryRouter from '../../src/routes/categoryRoutes';
import { run } from '../../src/fixtures/projectsFixtures'; 
import { handle } from 'hono/netlify';

const app = new Hono();

app.use(cors())

let initialized = false

app.use('*', async (c, next) => {
  if (!initialized) {
    await connectDB()
    await initializeUsers()
    await run()
    initialized = true
  }
  return next()
})

app.get('/', (c) => c.text('Hello world'))
app.route('/api/auth', authRouter);
app.route('/api/users', userRouter);
app.route('/api/projects', projectRouter);
app.route('/api/galleries', galleryRouter);
app.route('/api/categories', categoryRouter);

export default handle(app)