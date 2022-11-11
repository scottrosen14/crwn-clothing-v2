export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED'
}

export interface CategoryItem {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export interface Category {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}