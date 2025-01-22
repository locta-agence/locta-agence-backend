
import { Gallery, IGallery } from '../models/galleryModel';

export const createGallery = async (galleryData: Partial<IGallery>): Promise<IGallery> => {
    const gallery = new Gallery(galleryData);
    return await gallery.save();
};

export const getGalleryById = async (id: string): Promise<IGallery | null> => {
    return await Gallery.findById(id);
};

export const getAllGalleries = async (): Promise<IGallery[]> => {
    return await Gallery.find();
};

export const updateGallery = async (id: string, galleryData: Partial<IGallery>): Promise<IGallery | null> => {
    return await Gallery.findByIdAndUpdate(id, galleryData, { new: true });
};

export const deleteGallery = async (id: string): Promise<IGallery | null> => {
    return await Gallery.findByIdAndDelete(id);
};
