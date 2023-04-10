import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import shopModel from "../model/ShopModel";

const shop_router = exress.Router();

shop_router.get("/get/tools", async (req: Request, res: Response) => {
  const result = await shopModel.findOne();
  res.status(200).send(result);
});

export default shop_router;
