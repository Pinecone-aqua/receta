export interface CollectionType {
  name: string;
}
export interface ToolsType {
  _id: string;
  image_url: string;
  name: string;
  price: number;
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
  alcohol: boolean;
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

export interface CreateCategoryType {
  collection: string;
  name: string;
}

export interface CategoryType {
  collection_name: string;
  _id: string;
  name: string;
}

export interface CollectionType {
  name: string;
  _id: string;
  image_url: string;
}

export interface OthersContextType {
  activePage: string | null;
  setActivePage: React.Dispatch<React.SetStateAction<string | null>>;
  news: NewsType[];
  setNews: React.Dispatch<React.SetStateAction<NewsType[]>>;
}

export interface CocktailContextType {
  recipes: CocktailType[];
  setRecipes: React.Dispatch<React.SetStateAction<CocktailType[]>>;
}

export interface PropType {
  children: React.ReactNode;
}
export interface NewsType {
  _id: string;
  name: string;
  description: string;
  title: string;
  subTitle: string;
  image_url: string;
  category: string;
}
export interface CreateNewsType {
  name: string;
  description: string;
  title: string;
  subTitle: string;
  category: string;
}
