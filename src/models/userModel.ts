import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    password: string;
    isAdmin: boolean;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
});

export const User = mongoose.model<IUser>('User', UserSchema);