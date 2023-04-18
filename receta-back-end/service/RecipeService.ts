import categoryModel from "../model/CaregoryModel";
import collectionModel from "../model/CollectionModel";
import recipeModel from "../model/RecipeModel";
import userModel from "../model/UserModel";

export async function createRecipe(newRecipe: any) {
  const category_id = await categoryModel.findOne({ name: newRecipe.category });
  const creat_account_id = await userModel.findOne({ name: newRecipe.name });
  const collection_id = await collectionModel.findOne({
    name: newRecipe.collection,
  });

  return await recipeModel.create({
    name: newRecipe.name,
    description: newRecipe.description,
    category_id: category_id,
    ingredients: newRecipe.ingredients,
    guide: newRecipe.guide,
    create_account_id: creat_account_id,
    tools: newRecipe.tools,
    collection_id: collection_id,
  });
}
