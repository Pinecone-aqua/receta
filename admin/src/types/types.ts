// import { ReactNode } from "react";

export interface CollectionType {
  name: string;
}
export interface ToolsType {
  _id: string;
  image_url: string | undefined;
  name: string;
}

export interface CocktailType {
  _id: string;
  name: string;
  description: string;
  categories_id: any[];
  collection_id: string;
  ingredients: string[];
  how_to: string[];
  image_url: string;
  video_url: string;
  alcohol: string;
  tools: string[];
}
export interface CreateCocktailType {
  name: string;
  description: string;
  categories: string;
  collection: string;
  ingredients: string[];
  how_to: string[];
  video_url: string;
  alcohol: string;
  tools: string[];
}

export interface CategoryType {
  collection: string;
  name: string;
}
