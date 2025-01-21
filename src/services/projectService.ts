
import { Project, IProject } from '../models/projectModel';

export const createProject = async (projectData: Partial<IProject>): Promise<IProject> => {
    const project = new Project(projectData);
    return await project.save();
};

export const getProjectById = async (id: string): Promise<IProject | null> => {
    return await Project.findById(id);
};

export const getAllProjects = async (): Promise<IProject[]> => {
    return await Project.find();
};

export const updateProject = async (id: string, projectData: Partial<IProject>): Promise<IProject | null> => {
    return await Project.findByIdAndUpdate(id, projectData, { new: true });
};

export const deleteProject = async (id: string): Promise<IProject | null> => {
    return await Project.findByIdAndDelete(id);
};
