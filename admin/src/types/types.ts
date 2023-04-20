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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredients: any;
  imageUrl: string;
  videoUrl: string;
  alcohol: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tools: any;
}

export interface CategoryType {
  collection: string;
  category: string;
}
