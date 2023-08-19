import { clientServices } from './client.service';
import { updateClientDto } from 'src/dtos/client/update.dto';
import { Client } from 'src/entity/client.entity';
import { createClientDto } from 'src/dtos/client/create.dto';
export declare class clientController {
    private clientServices;
    constructor(clientServices: clientServices);
    getOneClient(id: number): Promise<Client>;
    getClient(companyId: number): Promise<Client[]>;
    create(data: createClientDto, companyId: number): Promise<any>;
    update(id: number, data: updateClientDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
