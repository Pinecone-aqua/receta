import mongoose, { Schema } from "mongoose";

const collectionSchema = new Schema(
  {
    image_url: String,
    name: String,
  },
  {
    collection: "collection",
  }
);

const collectionModel = mongoose.model("collection", collectionSchema);

export default collectionModel;
