import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    saved: [{ type: Schema.Types.ObjectId, required: false, ref: "Recipe" }],
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    last_login: String,
    created_at: Date,
    updated_at: Date,
    role: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
