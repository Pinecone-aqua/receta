import { Body, Controller, Get, Post } from '@nestjs/common';
import { CollectionService } from './collections.service';

@Controller('collections')
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
