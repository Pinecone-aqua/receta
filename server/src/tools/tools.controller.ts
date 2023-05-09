import { Controller, Get, Query } from "@nestjs/common";
import { ToolsService } from "./tools.service";
@Controller("tools")
export class ToolsController {
  constructor(private readonly toolService: ToolsService) {}

  @Get("get")
  find() {
    return this.toolService.all();
  }

  @Get("find")
  findTool(@Query("id") id: string) {
    return this.toolService.findId(id);
  }

  @Get("get-ids")
  getIds() {
    return this.toolService.getIds();
  }

  // @Post('create')
  // create(@Body() body: any) {
  //   console.log('body: ', body);

  // try {
  //   return this.toolService.create(body);
  // } catch (err) {
  //   return err;
  // }
  // }
}
