import {OrderData} from "@pages/admin/sidebar/dashboard/types.ts";

export const getStatusColor = (status: OrderData["status"]) => {
    switch (status) {
        case "completed":
            return "success"
        case "pending":
            return "primary"
        case "cancelled":
            return "error"
        default:
            return "default"
    }
}