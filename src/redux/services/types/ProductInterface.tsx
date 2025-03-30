import {Pagination} from "@redux/services/types/IPagination.ts";
/**  ======================================== */
/**                 PRODUCT                   */
/**  ======================================== */
export interface ResProduct {
  id: string,
  name: string,
  description: string,
  price: number,
  stock: number,
  orders:Array<string>,
  image:string|null,
  avg_rating:number,
  colors:Array<string>,
  sizes:Array<number>,
  thumbnails:Array<{id:number,image:string}>,
  isWishlist:boolean|string,
  category?:number,
  categoryName:string,
  created_at:string,
  updated_at:string
}
export type ResProducts = Pagination<ResProduct>

/** Form */
export interface ProductFormData extends Pick<ResProduct, "name"|"price"|"stock"|"description"|"category">{
  image:File|null;
}
export const DefaultProductFormData:ProductFormData={
  name:"",
  image:null,
  // category:NaN,
  description:"",
  price:0,
  stock:0
}
/**  ======================================== */
/**                 CATEGORY                  */
/**  ======================================== */
export interface ResCategory {
  id:    number;
  name:  string;
  image: null;
}
export interface Price {
  max: number;
  min: number;
}
export interface DataFilter {
  category: ResCategory[];
  price:    Price;
}
export interface ResFilterProduct {
  filterset_fields:Array<string>,
  ordering_fields:Array<string>,
  search_fields:Array<string>,
  data_filter:      DataFilter;
}