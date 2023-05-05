import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tool } from "src/tools/tools.schema";
import { CreatetoolsDto } from "./tools.create.dto";

@Injectable()
export class ToolsService {
  constructor(@InjectModel(Tool.name) private toolModel: Model<Tool>) {}
  allTools() {
    return this.toolModel.find();
  }

  async createTool(tool: CreatetoolsDto) {
    console.log(tool);
    try {
      return this.toolModel.create({
        name: tool.name,
        image_url: tool.image_url,
        price: tool.price,
      });
    } catch (err) {
      return err;
    }
  }
}
