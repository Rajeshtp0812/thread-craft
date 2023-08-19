import { AuthService } from './auth.service';
import { userDto } from 'src/dtos/user/user.dto';
import { loginDto } from 'src/dtos/user/login.dto';
export declare class authcontroller {
    private authServices;
    constructor(authServices: AuthService);
    register(user: userDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    Login(loginDto: loginDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshLogin(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
