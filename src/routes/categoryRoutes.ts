import { Hono } from 'hono';
import * as CategoryController from '../controllers/categoryController';

const categoryRouter = new Hono();

categoryRouter.get('/', CategoryController.getAllCategories);
categoryRouter.get('/:id', CategoryController.getCategory);
categoryRouter.post('/', CategoryController.createCategory);
categoryRouter.put('/:id', CategoryController.updateCategory);
categoryRouter.delete('/:id', CategoryController.deleteCategory);

export default categoryRouter;
