import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tool } from "src/tools/tools.schema";

@Injectable()
export class ToolsService {
  constructor(@InjectModel(Tool.name) private ToolModel: Model<Tool>) {}
  all() {
    return this.ToolModel.find();
  }

  findId(id: string) {
    return this.ToolModel.findOne({ _id: id });
  }

  getIds() {
    return this.ToolModel.find().select({ _id: 1 });
  }

  // create(category: any) {
  //   return this.ToolModel.create(category);
  // }
}
