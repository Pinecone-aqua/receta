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
    return this.userService.loginUser(user);
  }

  @Post("create")
  create(@Body() body: any) {
    console.log("body: ", body);

    return this.userService.createUser(body);
  }
}
