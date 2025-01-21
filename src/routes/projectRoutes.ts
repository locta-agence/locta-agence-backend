import { Hono } from 'hono';
import * as ProjectController from '../controllers/projectController';

const projectRouter = new Hono();

projectRouter.get('/', ProjectController.getAllProjects);
projectRouter.get(':id', ProjectController.getProject);
projectRouter.post('/', ProjectController.createProject);
projectRouter.put('/:id', ProjectController.updateProject);
projectRouter.delete('/:id', ProjectController.deleteProject);

export default projectRouter;
