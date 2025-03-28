import {Pagination} from "@redux/services/types/IPagination.ts";

export interface ResWishlist{id:string,product:number,quantity:number}
export type ResWishlists = Pagination<ResWishlist>