export interface CollectionType {
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
}
