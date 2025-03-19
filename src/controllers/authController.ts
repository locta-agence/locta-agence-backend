import { Context, Next } from 'hono';
import bcrypt from 'bcryptjs';
import * as UserService from '../services/userService';
import { sign, verify } from 'hono/jwt'
import { JwtTokenExpired, JwtTokenInvalid } from "hono/utils/jwt/types";
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET ?? '';

export const jwtAuth = async (c: Context, next: Next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return c.json({ message: 'Authentification requise' }, 401);
    }

    try {
        const token = authHeader.split(' ')[1];
        console.log(JWT_SECRET);
        const decoded = await verify(token, JWT_SECRET);
        c.set('user', decoded);
        await next();
    } catch (err: any) {
        if (err instanceof JwtTokenExpired) {
            return c.json({ message: 'Token expiré' }, 401);
        }
        if (err instanceof JwtTokenInvalid) {
            return c.json({ message: 'Token invalide' }, 401);
        }

        return c.json({ message: 'Erreur lors de l\'authentification' }, 500);
    }
};

export const login = async (c: Context) => {
    const body = await c.req.json();
    const { name, password } = body;
    try {
        const user = await UserService.getUserByParams({ name });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return c.json({ message: 'Identifiants invalides' }, 401);
        }

        const payload = {
            userId: user._id,
            name: user.name,
            exp: Math.floor(Date.now() / 1000) + 60 * 15
        };

        const token = await sign(payload, JWT_SECRET);
        return c.json({ message: 'Connexion réussie', token });
    } catch (err) {
        return c.json({ message: 'Erreur lors de la connexion' }, 500);
    }
};