import { Context } from 'hono';
import * as CategoryService from '../services/categoryService';

export const createCategory = async (ctx: Context) => {
    const body = await ctx.req.json();
    const category = await CategoryService.createCategory(body);
    return ctx.json(category, 201);
};

export const getCategory = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const category = await CategoryService.getCategoryById(id);
    if (!category) return ctx.json({ message: 'Category not found' }, 404);
    return ctx.json(category);
};

export const getAllCategories = async (ctx: Context) => {
    const categories = await CategoryService.getAllCategories();
    return ctx.json(categories);
};

export const updateCategory = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const body = await ctx.req.json();
    const updatedCategory = await CategoryService.updateCategory(id, body);
    if (!updatedCategory) return ctx.json({ message: 'Category not found' }, 404);
    return ctx.json(updatedCategory);
};

export const deleteCategory = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const deletedCategory = await CategoryService.deleteCategory(id);
    if (!deletedCategory) return ctx.json({ message: 'Category not found' }, 404);
    return ctx.json({ message: 'Category deleted' });
};
