import express from "express";
import dotenv from "dotenv";
import recipe_router from "./controller/RecipeRouter";
import user_router from "./controller/UserRouter";
import collection_router from "./controller/CollectionRouter";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(recipe_router);
app.use(user_router);
app.use(collection_router);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
