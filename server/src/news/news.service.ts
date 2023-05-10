import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CloudinaryService } from "src/cloudinary/cloudinary.service";
import { CreateNewsDto } from "./news.create.dto";
import { News } from "./news.schema";

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private NewsModel: Model<News>,
    private readonly cloudinary: CloudinaryService
  ) {}
  all() {
    return this.NewsModel.find().select({ _id: 1, title: 1, subTitle: 1 });
  }

  findId(id: string) {
    return this.NewsModel.findOne({ _id: id });
  }

  async create(data: CreateNewsDto, file: any) {
    try {
      const { secure_url } = await this.cloudinary.uploadImage(file);
      console.log("img", secure_url);
      console.log("data", data);

      // return this.NewsModel.create({ data });
    } catch (err) {
      return err;
    }
  }
  delete(id: string) {
    try {
      return this.NewsModel.deleteOne({ _id: id });
    } catch (err) {
      return err;
    }
  }
}
