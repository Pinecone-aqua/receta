import userModel from "../model/UserModel";

export async function createUser(newUser: any) {
  return await userModel.create({
    image: newUser.image_url,
    name: newUser.name,
    email: newUser.email,
  });
}

export async function adminLogin(admin: any) {
  console.log(admin);

  return await userModel.findOne({
    email: admin.email,
    password: admin.password,
    role: "admin",
  });
}
