import { Controller, Get, Param } from "@nestjs/common";
import { userService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('/user')
export class userController {

      constructor(private userService: userService) { }

      @Get(':id')
      async getUser(@Param('id') id: number) {
            return this.userService.findById(id)
      }

}