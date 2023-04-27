// import { ReactNode } from "react";

export interface CollectionType {
  name: string;
}
export interface ToolsType {
  _id: string;
  image_url: string | undefined;
  name: string;
}

// export interface RecipeType {
//   name(arg0: string, name: any): unknown;
//   _id: ReactNode;
// }

export interface CocktailType {
  
  name: string;
  description: string;
  category: string;
  collection: string;
  ingredients: any;
  how_to: any;
  video_url: string;
  alcohol: string;
  tools: any;
}

export interface CategoryType {
  collection: string;
  name: string;
}
