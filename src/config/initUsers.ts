// Fichier : src/config/initUsers.ts
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';

export const initializeUsers = async () => {
    const usersCount = await User.countDocuments();
    if (usersCount === 0) {
        const users = [
            {
                name: 'Admin User',
                password: await bcrypt.hash('admin123', 10),
                isAdmin: true,
            },
            {
                name: 'John Doe',
                password: await bcrypt.hash('password123', 10),
                isAdmin: false,
            },
            {
                name: 'Jane Smith',
                password: await bcrypt.hash('mypassword', 10),
                isAdmin: false,
            },
        ];

        await User.insertMany(users);
        console.log('Initialized 3 users in the database.');
    } else {
        console.log('Users already exist in the database.');
    }
};
