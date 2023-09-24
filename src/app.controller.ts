import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';

@Controller('dashboard')
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get()
  @Public()
  Count(){
    return this.appService.count()
  }
    
}
