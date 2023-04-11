import mongoose, { Schema } from "mongoose";

const shopSchema = new Schema(
  {
    name: String,
    image_url: String,
  },
  {
    collection: "shop",
  }
);

const shopModel = mongoose.model("Shop", shopSchema);

export default shopModel;
