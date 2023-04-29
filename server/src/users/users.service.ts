import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  allUser() {
    return this.userModel.find();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  createUser(user: any) {
    return this.userModel.create({
      email: user.email,
      name: user.name,
      picture: user.picture,
    });
  }

  loginUser(user) {
    return this.userModel.findOne({
      email: user.email,
      password: user.password,
    });
  }
}
