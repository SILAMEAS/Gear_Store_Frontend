import {OrderData, ProductData, SalesData} from "../../../pages/admin/sidebar/dashboard/types.ts";

export interface ReqDashboard {
    start_date?:Date;
    end_date?:Date;
}
export enum EnumICard{
    total_sales="total_sales",
    total_orders="total_orders",
    total_customers="total_customers",
    total_payment="total_payment",
    total_products="total_products",
    total_categories="total_categories"

}
export interface ICard {id:EnumICard,title: string,value: number}
export interface ResDashboard {
    sales_chart:Array<SalesData>;
    cards:Array<ICard>
    top_selling_products: ProductData[];
    recent_orders_data:   OrderData[];
}
