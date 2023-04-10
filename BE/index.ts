import express, { Express } from "express";
import dotenv from "dotenv";
import recipe_router from "./controller/RecipeRouter";
import user_router from "./controller/UserRouter";
import shop_router from "./controller/ShopRouter";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(recipe_router);
app.use(user_router);
app.use(shop_router);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
