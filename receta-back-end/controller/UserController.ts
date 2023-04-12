import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { adminLogin, createUser } from "../service/UserService";

const user_router = exress.Router();

user_router.post("/google-acc", async (req: Request, res: Response) => {
  const newUser = req.body;
  console.log(newUser);

  try {
    const result = await createUser(newUser);
    res.status(200).send(result);
  } catch (error) {
    res.send(error);
  }
});

user_router.post("/admin-login", async (req: Request, res: Response) => {
  try {
    const result = await adminLogin(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

export default user_router;
