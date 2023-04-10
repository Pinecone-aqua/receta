import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema(
  {
    name: String,
    description: String,
    category: String,
    ingredients: [
      {
        name: String,
        amount: Number,
        unit: String,
      },
    ],
    directions: [String],
    image_url: String,
    rate: Number,
    love: Number,
    read_min: Number,
    alcohol: Boolean,
    comments: [String],
    create_account: { type: Schema.Types.ObjectId, ref: "Users" },
    created_at: Date,
    updated_at: Date,
  },
  {
    collection: "recipes",
  }
);

const recipeModel = mongoose.model("Recipe", recipeSchema);

export default recipeModel;
