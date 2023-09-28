import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Query
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from 'src/dtos/user/user.dto';
import { loginDto } from 'src/dtos/user/login.dto';

import { Public } from './public.decorator';
import { jwtAuth, refreshAuth } from './jwtAuth.guard';
import { ApiTags } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

@ApiTags('Authentication')
@Controller('auth')
export class authcontroller {

  constructor(private authServices: AuthService) { }

  @Post('register')
  @Public()
  async register(@Body() user: userDto) {
    return await this.authServices.create(user);
  }

  @Post('login')
  @Public()
  async Login(@Body() loginDto: loginDto) {
    return this.authServices.login(loginDto);
  }


  @Post('refresh')
  @Public()
  @UseGuards(new refreshAuth("jwt-refresh"))
  async refreshLogin(@Req() req) {

    return await this.authServices.refresh(req.user.id)

  }
  @Post('forgot-password')
  @Public()
    async sendMail(@Query('email') email:string ){
     return this.authServices.mailSendor(email)
    }
   @Post('update-password')
   async updatePassword(@Body() password:string ){
      return this.authServices.changePassword(password )

   }
  }
 
