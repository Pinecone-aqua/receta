import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request as Req,
  Response as Res,
} from "@nestjs/common";
import * as queryString from "query-string";
import { Request, Response } from "express";
import { getAccessTokenFromCode } from "./getAccessTokenFromCode";
import { getGoogleUserInfo } from "./getGoogleUserInfo";
import { UserService } from "../users/users.service";
import { User } from "../users/user.schema";
import { JwtService } from "@nestjs/jwt";

@Controller()
export class GoogleLoginController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  @Get("google-login")
  googleLogin() {
    const stringifiedParams = queryString.stringify({
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: `https://receta-server.onrender.com/google/callback`,
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ].join(" "),
      response_type: "code",
      access_type: "online",
      prompt: "consent",
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  }

  @Get("google/callback")
  async verifyGoogle(@Req() req: Request, @Res() res: Response) {
    const { code } = req.query;
    console.log(code);

    if (!code) throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);

    const accessToken = await getAccessTokenFromCode(code);

    if (!accessToken)
      throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);

    console.log("access token taken");
    const profile: any = await getGoogleUserInfo(accessToken);
    console.log("profile taken");
    let user = await this.userService.findByEmail(profile.email);

    if (!user) {
      const userInput: User = {
        email: profile.email,
        name: profile.name,
        role: "CLIENT",
        picture: profile.picture,
      };
      user = await this.userService.createUser(userInput);
    }

    const payload = {
      name: user.name,
      email: user.email,
      picture: user.picture,
    };
    const token = this.jwtService.sign(payload);
    console.log("before redirect: ", payload);
    res
      .status(200)
      .cookie("token", token)
      .redirect(`http://localhost:${process.env.CLIENT_PORT}`);
  }
}
