import collectionModel from "../model/CollectionModel";

export async function createCollection(newCollection: any) {
  return await collectionModel.create({
    image_url: newCollection.image_url,
    name: newCollection.name,
  });
}
