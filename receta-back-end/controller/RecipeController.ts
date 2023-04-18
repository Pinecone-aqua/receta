import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { createRecipe } from "../service/RecipeService";

const recipe_router = exress.Router();

//test
recipe_router.get("/create-recipe", async (req: Request, res: Response) => {
  const newRecipe = req.body;
  try {
    const result = await createRecipe(newRecipe);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

export default recipe_router;
