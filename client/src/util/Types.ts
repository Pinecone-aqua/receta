export interface CollectionType {
  name: string;
}
export interface RecipesType {
  _id: string;
  name: string;
  description: string;
  collection: string;
  ingredients: object[];
  how_to: object[];
  video_url: string;
  image_url: string;
  categories_id: [];
  tools_id: string[];
  alcohol: boolean;
}

export interface CategoriesType {
  name: string;
  collection_id: { name: string };
}
