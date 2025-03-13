import {Pagination} from "./IPagination.ts";

export interface ResProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number,
  orders:Array<string>,
  image:string|null,
  rating:number,
  colors:Array<string>,
  sizes:Array<number>,
  thumbnails:Array<{id:number,image:string}>,
  isWishlist:boolean|string,
  category:number|null,
  categoryName:string
}
export type ResProducts = Pagination<ResProduct>

/** Form */
export interface ProductFormData extends Pick<ResProduct, "name"|"price"|"stock"|"description"|"category">{
  image:File|null;
}
export const DefaultProductFormData:ProductFormData={
  name:"",
  image:null,
  category:NaN,
  description:"",
  price:0,
  stock:0
}