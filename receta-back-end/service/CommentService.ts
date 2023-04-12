import commentModel from "../model/CommentModel";

export async function createComment(newComment: any) {
  return await commentModel.create();
}
