import bcrypt from "bcrypt";
import moment from "moment";
import userModel from "../model/UserModel";

const date = moment().format("llll");

export async function userRegister(newUser: any) {
  console.log(newUser);
  const hashedPassword = await bcrypt.hash(newUser.password, 15);
  if (hashedPassword) {
    const user = new userModel({
      email: newUser.email,
      password: hashedPassword,
      username: newUser.username,
      role: "admin",
      login_date: date,
    });
    return await user.save();
  }
}

export async function userLogin(email: string) {
  return await userModel.findOne({ email });
}
