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

  createUser(user: any) {
    return this.userModel.create(user);
  }

  loginUser(user) {
    return this.userModel.findOne({
      email: user.email,
      password: user.password,
    });
  }
}
