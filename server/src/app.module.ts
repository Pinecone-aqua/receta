import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CollectionModule } from './collection/collection.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CategoriesModule,
    CollectionModule,
    MongooseModule.forRoot(
      'mongodb+srv://munkhsuld:Zxcvb%400801@cluster0.di9aqtq.mongodb.net/receta?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
