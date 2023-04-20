import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('allUser')
  find() {
    return this.userService.allUser();
  }

  @Post('create-user')
  create(@Body() body: any) {
    console.log('body: ', body);

    return this.userService.createUser(body);
  }
}
