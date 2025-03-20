import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    desc: string;
}

const CategorySchema: Schema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
}, {
    timestamps: true,
});

export const Category = mongoose.model<ICategory>('Category', CategorySchema);