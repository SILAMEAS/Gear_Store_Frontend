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
  isWishlist:boolean
}
export interface ResProducts extends Pagination<ResProduct>{}