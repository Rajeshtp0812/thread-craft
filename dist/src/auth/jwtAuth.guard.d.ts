import { ExecutionContext } from '@nestjs/common';
import { Reflector } from "@nestjs/core";
declare const jwtAuth_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class jwtAuth extends jwtAuth_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
}
declare const refreshAuth_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class refreshAuth extends refreshAuth_base {
}
export {};
