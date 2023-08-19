import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const jwtStrategy_base: new (...args: any[]) => Strategy;
export declare class jwtStrategy extends jwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<any>;
}
declare const refreshStrategy_base: new (...args: any[]) => Strategy;
export declare class refreshStrategy extends refreshStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<any>;
}
export {};
