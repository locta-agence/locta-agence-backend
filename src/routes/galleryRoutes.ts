import { Hono } from 'hono';
import * as GalleryController from '../controllers/galleryController';

const galleryRouter = new Hono();

galleryRouter.get('/', GalleryController.getAllGalleries);
galleryRouter.get(':id', GalleryController.getGallery);
galleryRouter.post('/', GalleryController.createGallery);
galleryRouter.put('/:id', GalleryController.updateGallery);
galleryRouter.delete('/:id', GalleryController.deleteGallery);
galleryRouter.get('/projects/:projectId', GalleryController.getGalleriesByProject);

export default galleryRouter;
