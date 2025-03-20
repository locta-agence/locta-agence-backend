import mongoose from 'mongoose';
import { Project } from '../models/projectModel';  
import { Category } from '../models/categoyModel';  
import { Gallery } from '../models/galleryModel';  

async function createProjectsForCategories() {
    const categories = await Category.find();

    if (categories.length === 0) {
        console.log('Aucune catégorie trouvée.');
        return;
    }

    for (const category of categories) {
        const existingProjects = await Project.find({ idCategory: category._id });

        if (existingProjects.length === 0) {
            const projects = [];

            for (let i = 0; i < 3; i++) {
                const project = new Project({
                    name: `Project ${i + 1} for Category ${category.name}`,
                    number: `${Math.floor(Math.random() * 10000)}`,
                    description: `This is a description for Project ${i + 1} in Category ${category.name}`,
                    rating: ['5', '4', '3'], 
                    idCategory: category._id  
                });

                const gallery = new Gallery({
                    idProject: project._id,
                    url: `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 1000)}`, 
                    isVideo: false  
                });

                await gallery.save();
                console.log(`Gallery created for project: ${project.name}`);

                projects.push(project);
            }

            await Project.insertMany(projects);
            console.log(`3 projects created for category ${category.name}`);
        } else {
            console.log(`Projects already exist for category ${category.name}, skipping creation.`);
        }
    }
}

export async function run() {
    try {
        await createProjectsForCategories();

    } catch (error) {
        console.error('Error during fixture creation:', error);
    }
}

