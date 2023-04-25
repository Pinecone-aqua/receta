export interface CollectionType {
  name: string;
}
export interface ToolsType {
  _id: string;
  image_url: string | undefined;
  name: string;
}

export interface CocktailType {
  name: string;
  description: string;
  category: string;
  collection: string;
  ingredients: any;
  how_to: any;
  image_url: string;
  video_url: string;
  alcohol: string;
  tools: any;
}

export interface CategoryType {
  collection: string;
  name: string;
}
