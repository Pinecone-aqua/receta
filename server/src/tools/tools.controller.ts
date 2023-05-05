import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { ToolsService } from "./tools.service";

@Controller("tools")
export class ToolsController {
  constructor(
    private readonly toolService: ToolsService,
    private readonly cloudinary: CloudinaryService
  ) {}

  @Get("get")
  find() {
    return this.toolService.allTools();
  }

  @Post("create")
  @UseInterceptors(FileInterceptor("file"))
  async create(
    @Body() body: any,
    @UploadedFile()
    file: any
  ) {
    try {
      const response = await this.cloudinary.uploadImage(file);

      const data = await {
        ...JSON.parse(body.newTool),
        image_url: response?.secure_url,
      };
      console.log(data);
      return this.toolService.createTool(data);
    } catch (e) {
      return e.message;
    }
  }
}
