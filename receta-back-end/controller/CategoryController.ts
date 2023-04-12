import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import categoryModel from "../model/CaregoryModel";
import { createCategory } from "../service/CategoryService";

const category_router = exress.Router();

category_router.post(
  "/create-category",
  async (req: Request, res: Response) => {
    const newCategory = req.body;

    try {
      const result = await createCategory(newCategory);
      res.status(200).send(result);
    } catch (err) {
      res.send(err);
    }
  }
);

export default category_router;
