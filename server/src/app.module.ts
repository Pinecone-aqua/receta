import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CollectionModule } from './collections/collections.module';
import { RecipesModule } from './recipes/recipes.module';
import { ToolsModule } from './tools/tools.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    UserModule,
    RecipesModule,
    CategoriesModule,
    CollectionModule,
    ToolsModule,
    MongooseModule.forRoot(
      'mongodb+srv://munkhsuld:Zxcvb%400801@cluster0.di9aqtq.mongodb.net/receta?retryWrites=true&w=majority',
      // MulterModule.register({
      //   dest: './uploads',
      // }),
      // SharedModule,
      // AuthModule,
      // ProductModule,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
