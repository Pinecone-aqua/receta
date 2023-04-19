import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('get')
  find() {
    return this.collectionService.allCollection();
  }

  @Post('create')
  create(@Body() body: any) {
    console.log('body: ', body);

    return this.collectionService.createCollection(body);
  }
}
