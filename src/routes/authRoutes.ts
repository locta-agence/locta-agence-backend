import { Hono } from 'hono';
import * as AuthController from '../controllers/authController';

const userRouter = new Hono();

userRouter.post('/login', AuthController.login);

export default userRouter;
