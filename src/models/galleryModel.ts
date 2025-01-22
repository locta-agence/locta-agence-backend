import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
    idProject: mongoose.Types.ObjectId;
    url: string;
    isVideo: boolean;
}

const GallerySchema: Schema = new Schema({
    idProject: { type: mongoose.Types.ObjectId, required: true, ref: 'Project' },
    url: { type: String, required: false },
    isVideo: { type: Boolean, required: false },
}, {
    timestamps: true,
});

export const Gallery = mongoose.model<IGallery>('Gallery', GallerySchema);