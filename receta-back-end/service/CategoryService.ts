import categoryModel from "../model/CaregoryModel";

export async function createCategory(newCategory: any) {
  return await categoryModel.create({
    image_url: newCategory.image_url,
    name: newCategory.name,
  });
}
