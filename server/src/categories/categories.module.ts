import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Categories, CategoriesSchema } from 'src/schemas/categories.schema';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categories.name, schema: CategoriesSchema },
    ]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
