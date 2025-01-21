import { Context } from 'hono';
import * as ProjectService from '../services/projectService';

export const createProject = async (ctx: Context) => {
    const body = await ctx.req.json();
    const project = await ProjectService.createProject(body);
    return ctx.json(project, 201);
};

export const getProject = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const project = await ProjectService.getProjectById(id);
    if (!project) return ctx.json({ message: 'Project not found' }, 404);
    return ctx.json(project);
};

export const getAllProjects = async (ctx: Context) => {
    const projects = await ProjectService.getAllProjects();
    return ctx.json(projects);
};

export const updateProject = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const body = await ctx.req.json();
    const updatedProject = await ProjectService.updateProject(id, body);
    if (!updatedProject) return ctx.json({ message: 'Project not found' }, 404);
    return ctx.json(updatedProject);
};

export const deleteProject = async (ctx: Context) => {
    const { id } = ctx.req.param();
    const deletedProject = await ProjectService.deleteProject(id);
    if (!deletedProject) return ctx.json({ message: 'Project not found' }, 404);
    return ctx.json({ message: 'Project deleted' });
};
