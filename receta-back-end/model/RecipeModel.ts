import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    name: String,
    description: String,
    category: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "category",
    },
    ingredients: [
      {
        name: String,
        amount: Number,
        unit: String,
      },
    ],
    guide: [{ String, Number }],
    image_url: String,
    like: { type: Number, required: false },
    create_account: { type: Schema.Types.ObjectId, ref: "user" },
    tools: [{}],
    collections: { type: [Schema.Types.ObjectId], ref: "collections" },
  },
  {
    collection: "recipe",
  }
);

const recipeModel = mongoose.model("recipe", recipeSchema);

export default recipeModel;
