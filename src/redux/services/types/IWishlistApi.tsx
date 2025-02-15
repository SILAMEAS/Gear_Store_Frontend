import {Pagination} from "./IPagination.ts";

export interface ResWishlist{id:string,product:number,quantity:number}
export interface ResWishlists extends Pagination<ResWishlist>{}