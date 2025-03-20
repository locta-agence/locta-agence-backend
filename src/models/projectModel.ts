import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    name: string;
    number: string;
    description: string;
    rating: string[];
    idCategory: mongoose.Types.ObjectId; 
}

const ProjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    rating: [{ type: String, required: false }],
    idCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },  
}, {
    timestamps: true,
});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
