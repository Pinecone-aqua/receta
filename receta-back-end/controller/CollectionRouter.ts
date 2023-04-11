import exress, { Request, Response } from "express";
import "../config/mongoose-config";

const collection_router = exress.Router();

// collection_router.get("/get/tools", async (req: Request, res: Response) => {
//   const result = await shopModel.findOne();
//   res.status(200).send(result);
// });

export default collection_router;
