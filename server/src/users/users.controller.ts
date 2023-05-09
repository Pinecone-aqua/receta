import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { UserService } from "./users.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("get")
  find() {
    return this.userService.allUser();
  }

  @Post("login")
  login(@Body() user) {
    try {
      return this.userService.loginUser(user);
    } catch (err) {
      return err;
    }
  }

  @Post("create")
  create(@Body() body: any) {
    return this.userService.createUser(body);
  }
}
