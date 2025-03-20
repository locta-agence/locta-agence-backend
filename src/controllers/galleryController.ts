import { Context } from 'hono';
import * as GalleryService from '../services/galleryService';

export const createGallery = async (ctx: Context) => {
    const body = await ctx.req.json();
    const gallery = await GalleryService.createGallery(body);
    return ctx.json(gallery, 201);
};

export const getGallery = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const gallery = await GalleryService.getGalleryById(id);
    if (!gallery) return ctx.json({ message: 'Gallery not found' }, 404);
    return ctx.json(gallery);
};

export const getAllGalleries = async (ctx: Context) => {
    const galleries = await GalleryService.getAllGalleries();
    return ctx.json(galleries);
};

export const updateGallery = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const body = await ctx.req.json();
    const updatedGallery = await GalleryService.updateGallery(id, body);
    if (!updatedGallery) return ctx.json({ message: 'Gallery not found' }, 404);
    return ctx.json(updatedGallery);
};

export const deleteGallery = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const deletedGallery = await GalleryService.deleteGallery(id);
    if (!deletedGallery) return ctx.json({ message: 'Gallery not found' }, 404);
    return ctx.json({ message: 'Gallery deleted' });
};

export const getGalleriesByProject = async (ctx: Context) => {
    const { projectId } = ctx.req.param();  
    try {
        const galleries = await GalleryService.getGalleriesByProject(projectId);
        if (galleries.length === 0) return ctx.json({ message: 'No galleries found for this project' }, 404);
        return ctx.json(galleries);
    } catch (error) {
        return ctx.json({ message: error.message }, 400); 
    }
};
