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

export interface UsersType {
  email: string;
  password: string;
  name?: string;
}

export interface ProductContextType {
  recipes: RecipesType[] | null;
  categories: CategoriesType[];
  activeBtn: string | null;
  currentColor: string | null;
  setActiveBtn: React.Dispatch<React.SetStateAction<string | null>>;
  setRecipes: React.Dispatch<React.SetStateAction<RecipesType[]>>;
}

export interface UserContextType {
  user: UsersType | null | undefined;
  setUser: React.Dispatch<React.SetStateAction<UsersType | null | undefined>>;
}

export interface PropType {
  children: React.ReactNode;
}
