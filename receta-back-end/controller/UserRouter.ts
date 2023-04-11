import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import userModel from "../model/UserModel";

const shop_router = exress.Router();

shop_router.post("/google-acc", async (req: Request, res: Response) => {
  const newAcc = req.body.session.user;
  console.log(newAcc);

  const result = await userModel.create({
    image: newAcc.image,
    name: newAcc.name,
    email: newAcc.email,
  });
  res.status(200).send(result);
});

export default shop_router;
