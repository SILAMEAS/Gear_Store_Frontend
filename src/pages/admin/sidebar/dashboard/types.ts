import type React from "react"
export interface OrderData {
    id: string
    customer: string
    product: string
    date: string
    amount: number
    status: "completed" | "pending" | "cancelled"
}

export interface SalesData {
    date: string
    amount: number
}

export interface ProductData {
    id: string
    name: string
    sold: number
    revenue: number
    image: string
}

export interface MetricCardProps {
    title: string
    value: string | number
    icon: React.ReactNode
    trend?: number
    trendLabel?: string
    color?: string
}

export interface TicketData { month:string, created: number, solved: number }
export interface WeekdayData{
    day:string,
    tickets:number
}
export interface TicketTypeData { name: string, value: number, color: string }