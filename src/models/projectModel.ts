import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
    name: string;
    rating: string[];
}

const ProjectSchema: Schema = new Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    rating: [{ type: String, required: false }],
}, {
    timestamps: true,
});

export const Project = mongoose.model<IProject>('Project', ProjectSchema);