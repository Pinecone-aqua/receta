import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tool, ToolSchema } from 'src/tools/tools.schema';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tool.name, schema: ToolSchema }]),
  ],
  controllers: [ToolsController],
  providers: [ToolsService],
})
export class ToolsModule {}
