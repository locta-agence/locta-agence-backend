import { Hono } from 'hono';
import * as UserController from '../controllers/userController';

const userRouter = new Hono();

userRouter.get('/', UserController.getAllUsers);
userRouter.get(':id', UserController.getUser);
userRouter.post('/', UserController.createUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;
