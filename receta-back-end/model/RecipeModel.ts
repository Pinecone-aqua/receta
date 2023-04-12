import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    name: String,
    description: String,
    category_id: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "category",
    },
    ingredients: [
      {
        name: String,
        unit: String,
      },
    ],
    guide: [{}],
    image_url: String,
    like: { type: Number, required: false },
    create_account_id: { type: Schema.Types.ObjectId, ref: "user" },
    tools: [{}],
    collection_id: { type: [Schema.Types.ObjectId], ref: "collection" },
  },
  {
    collection: "recipe",
  }
);

const recipeModel = mongoose.model("recipe", recipeSchema);

export default recipeModel;
