import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
interface userData {
    firstName: string;
    lastName?: string;
    username: string;
    password: string;
}
export declare class userService {
    private users;
    constructor(users: Repository<User>);
    createUser(user: userData): Promise<userData & User>;
    findById(id: number): Promise<User[]>;
    findUser(username: string): Promise<User>;
    updateUser(id: any, data: any): Promise<void>;
}
export {};
