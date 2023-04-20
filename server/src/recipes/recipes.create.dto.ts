export class CreateRecipesDto {
  name: string;
  description: string;
  collection: string;
  ingredients: object[]; // name
  how_to: object[];
  video_url: string;
  image_url: string;
  categories: string[];
  tools: string[];
  alcohol: boolean;
}
