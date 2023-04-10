import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import recipeModel from "../model/RecipeModel";

const recipe_router = exress.Router();

recipe_router.get("/get/recipes", async (req: Request, res: Response) => {
  const result = await recipeModel.findOne();
  res.status(200).send(result);
});

export default recipe_router;
