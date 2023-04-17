import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { createCollection, getCollection } from "../service/CollectionService";

const collection_router = exress.Router();

collection_router.post(
  "/create-collection",
  async (req: Request, res: Response) => {
    const newCollection = req.body;

    try {
      const result = await createCollection(newCollection);
      res.status(200).send(result);
    } catch (err) {
      res.send(err);
    }
  }
);

collection_router.get(
  "/get-collection",
  async (req: Request, res: Response) => {
    try {
      const result = await getCollection();
      res.status(200).send(result);
    } catch (err) {
      res.send(err);
    }
  }
);

export default collection_router;
