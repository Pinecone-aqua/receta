import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    image_url: String,
    name: String,
  },
  {
    collection: "category",
  }
);

const categoryModel = mongoose.model("category", categorySchema);

export default categoryModel;
