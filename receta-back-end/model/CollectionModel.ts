import mongoose, { Schema } from "mongoose";

const collectionSchema = new Schema(
  {
    name: String,
  },
  {
    collection: "collections",
  }
);

const collectionModel = mongoose.model("collection", collectionSchema);

export default collectionModel;
