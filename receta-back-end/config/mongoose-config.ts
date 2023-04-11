import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_PASSWORD}@cluster0.di9aqtq.mongodb.net/receta`
  )
  .then(() => console.log("connect"));

export default mongoose.connection;
