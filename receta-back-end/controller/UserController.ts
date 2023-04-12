import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { createUser } from "../service/UserService";

const shop_router = exress.Router();

shop_router.post("/google-acc", async (req: Request, res: Response) => {
  const newUser = req.body;

  const result = await createUser(newUser);
  res.status(200).send(result);
});

export default shop_router;
