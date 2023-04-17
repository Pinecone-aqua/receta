import collectionModel from "../model/CollectionModel";

export async function createCollection(newCollection: any) {
  return await collectionModel.create({
    name: newCollection.name,
  });
}

export async function getCollection() {
  return await collectionModel.find();
}
