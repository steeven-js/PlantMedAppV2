import {ReviewType} from './ReviewType';

export type PlantmedType = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  isBestSeller: boolean;
  potTypes: string[];
  sizes: string[];
  size: string;
  colors: string[];
  color: string;
  description: string;
  habitat: string;
  propriete: string;
  usageInterne: string;
  usageExterne: string;
  precaution: string;
  sources: string[];
  symptoms: string;
  isBestseller: boolean;
  isFeatured: boolean;
  oldPrice?: number;
  quantity?: number;
  reviews: ReviewType[];
  types: string[];
  promotion: string;
  plantTypes: string[];
  isNew: boolean;
  isTop: boolean;
};
