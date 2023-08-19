import { userService } from "./user.service";
export declare class userController {
    private userService;
    constructor(userService: userService);
    getUser(id: number): Promise<import("../entity/user.entity").User[]>;
}
