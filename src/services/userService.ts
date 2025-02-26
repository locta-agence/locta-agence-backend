import { User, IUser } from '../models/userModel';

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
    const user = new User(userData);
    return await user.save();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
};

export const getUserByParams = async (userData): Promise<IUser | null> => {
    return await User.findOne(userData);
};

export const getAllUsers = async (): Promise<IUser[]> => {
    return await User.find();
};

export const updateUser = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
    return await User.findByIdAndDelete(id);
};
