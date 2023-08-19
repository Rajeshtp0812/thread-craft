import { updateClientDto } from 'src/dtos/client/update.dto';
import { Client } from 'src/entity/client.entity';
import { Repository } from 'typeorm';
export declare class clientServices {
    private readonly client;
    constructor(client: Repository<Client>);
    getClient(id: number): Promise<Client>;
    getClients(companyId: any): Promise<Client[]>;
    createClient(data: any, companyId: any): Promise<any>;
    updateClient(id: number, data: Partial<updateClientDto>): Promise<import("typeorm").UpdateResult>;
    deleteclient(id: number): Promise<import("typeorm").DeleteResult>;
}
