import {OrderData, ProductData, SalesData} from "@pages/admin/sidebar/dashboard/types.ts";
import {Pagination} from "@redux/services/types/IPagination.ts";

export enum EnumICard{
    total_sales="total_sales",
    total_orders="total_orders",
    total_customers="total_customers",
    total_payment="total_payment",
    total_products="total_products",
    total_categories="total_categories",
    total_users="total_users",
    total_shipping="total_shipping",


}
export interface ICard {id:EnumICard,title: string,value: number}


export interface Item {
    product:  number;
    quantity: number;
}
/** Req */
export interface ReqDashboard {
    start_date?:Date;
    end_date?:Date;
}
/** Res */
/** Only One */
export interface ResDashboard {
    sales_chart:Array<SalesData>;
    cards:Array<ICard>
    top_selling_products: ProductData[];
    recent_orders_data:   OrderData[];
}

export interface ResOrder {
    id:         string;
    user:       string;
    status:     OrderData["status"],
    created_at: Date;
    items:      Item[];
}
export interface ResPayment {
    user:           string;
    transaction_id: string;
    amount:         string;
    order:          string;
    payment_method: string;
}
export interface ResCategory {
    id:number;
    name: string;
}
export type IDType=number|string
/** Pagination */
export type ResOrders = Pagination<ResOrder>
export type ResPayments = Pagination<ResPayment>
export type ResCategories = Pagination<ResCategory>