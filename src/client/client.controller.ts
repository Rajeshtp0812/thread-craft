import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { clientServices } from './client.service';
import { updateClientDto } from 'src/dtos/client/update.dto';
import { Client } from 'src/entity/client.entity';
import { createClientDto } from 'src/dtos/client/create.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Client')
@Controller('client')
export class clientController {

  constructor(private clientServices: clientServices) { }

  @Get(':clientId')
  async getOneClient(@Param('clientId', ParseIntPipe) id: number): Promise<Client> {
    return await this.clientServices.getClient(id);
  }

  @Get()
  @ApiBearerAuth()
  async getClient(@Query('companyId', ParseIntPipe) companyId: number) {
    console.log(companyId)
    return await this.clientServices.getClients(companyId);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: createClientDto, @Query('companyId', ParseIntPipe) companyId: number) {
    return await this.clientServices.createClient(data, companyId);
  }

  @Put(':clientId')
  @UsePipes(new ValidationPipe())
  async update(@Param('clientId', ParseIntPipe) id: number, @Body() data: updateClientDto) {
    return await this.clientServices.updateClient(id, data);
  }

  @Delete(':clientId')
  async delete(@Param('clientId', ParseIntPipe) id: number) {
    await this.clientServices.deleteclient(id)
  }

}
