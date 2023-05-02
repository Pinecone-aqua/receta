import { Body, Controller, Get, Post } from "@nestjs/common";
import { ToolsService } from "./tools.service";
@Controller("tools")
export class ToolsController {
  constructor(private readonly toolService: ToolsService) {}

  @Get("get")
  find() {
    return this.toolService.all();
  }
}
