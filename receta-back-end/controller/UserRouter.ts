import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import userModel from "../model/UserModel";

const shop_router = exress.Router();

shop_router.post("/google-acc", async (req: Request, res: Response) => {
  const newAcc = req.body;
  console.log(newAcc);

  const result = await userModel.create({
    image: newAcc.image,
    name: newAcc.name,
    email: newAcc.email,
    role: newAcc.role,
  });
  res.status(200).send(result);
});

export default shop_router;
