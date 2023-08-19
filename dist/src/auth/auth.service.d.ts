import { JwtService } from '@nestjs/jwt';
import { userService } from 'src/user/user.service';
interface userData {
    firstName: string;
    lastName?: string;
    username: string;
    password: string;
}
interface login {
    username: string;
    password: string;
}
export declare class AuthService {
    private user;
    private jwt;
    constructor(user: userService, jwt: JwtService);
    create(user: userData): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(loginData: login): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(id: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    generateToken(payload: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    updateRefreshToken(id: any, refreshToken: string): Promise<void>;
}
export {};
