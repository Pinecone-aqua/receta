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

const collectionModel = mongoose.model("collections", collectionSchema);

export default collectionModel;
