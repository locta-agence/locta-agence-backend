import { Project, IProject } from '../models/projectModel';
import { Category } from '../models/categoyModel'; 

export const createProject = async (projectData: Partial<IProject>): Promise<IProject> => {
    const category = await Category.findById(projectData.idCategory);
    if (!category) throw new Error('Category not found');

    const project = new Project(projectData);
    return await project.save();
};

export const getProjectById = async (id: string): Promise<IProject | null> => {
    return await Project.findById(id).populate('idCategory');  
};

export const getAllProjects = async (): Promise<IProject[]> => {
    return await Project.find().populate('idCategory');  
};

export const updateProject = async (id: string, projectData: Partial<IProject>): Promise<IProject | null> => {
    if (projectData.idCategory) {
        const category = await Category.findById(projectData.idCategory);
        if (!category) throw new Error('Category not found');
    }

    return await Project.findByIdAndUpdate(id, projectData, { new: true }).populate('idCategory');
};

export const deleteProject = async (id: string): Promise<IProject | null> => {
    return await Project.findByIdAndDelete(id);
};

export const getProjectsByCategory = async (categoryId: string): Promise<IProject[]> => {
    return await Project.find({ idCategory: categoryId }).populate('idCategory');
};
