import exress, { Request, Response } from "express";
import "../config/mongoose-config";
import { createComment } from "../service/CommentService";

const comment_router = exress.Router();

comment_router.post("/create-comment", async (req: Request, res: Response) => {
  const newComment = req.body;

  try {
    const result = await createComment(newComment);
    res.status(200).send(result);
  } catch (err) {
    res.send(err);
  }
});

export default comment_router;
