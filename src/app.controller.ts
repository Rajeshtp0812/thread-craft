import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

@Controller('dashboard')
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get()
  @Public()
  Count(@Query("companyId" ,ParseIntPipe) companyId:number){
    return this.appService.count(companyId)
  }
    
}
