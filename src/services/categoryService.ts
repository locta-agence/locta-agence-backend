import { Category, ICategory } from '../models/categoyModel';

export const createCategory = async (categoryData: Partial<ICategory>): Promise<ICategory> => {
    const category = new Category(categoryData);
    return await category.save();
};

export const getCategoryById = async (id: string): Promise<ICategory | null> => {
    return await Category.findById(id);
};

export const getAllCategories = async (): Promise<ICategory[]> => {
    return await Category.find();
};

export const updateCategory = async (id: string, categoryData: Partial<ICategory>): Promise<ICategory | null> => {
    return await Category.findByIdAndUpdate(id, categoryData, { new: true });
};

export const deleteCategory = async (id: string): Promise<ICategory | null> => {
    return await Category.findByIdAndDelete(id);
};
