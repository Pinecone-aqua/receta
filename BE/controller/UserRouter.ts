import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { userRegister } from "../services/user-service";

const user_router = exress.Router();

user_router.post("/register", async (request: Request, response: Response) => {
  request.body.email && request.body.password;
  if (true) {
    const result = await userRegister(request.body);
    if (result) {
      response.status(201).send({
        message: "User Created Successfully",
        result,
      });
    } else {
      response.status(500).send({
        message: "Error creating user",
      });
    }
  }
});

export default user_router;
