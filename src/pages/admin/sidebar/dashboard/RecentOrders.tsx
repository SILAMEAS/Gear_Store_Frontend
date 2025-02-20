import {
    Card,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Chip,
    Avatar,
    Box,
} from "@mui/material"
import {OrderData} from "./types.ts";

const orders: OrderData[] = [
    {
        id: "#ORD-001",
        customer: "John Doe",
        product: "Nike Air Max",
        date: "2024-02-20",
        amount: 299.99,
        status: "completed",
    },
    {
        id: "#ORD-002",
        customer: "Jane Smith",
        product: "Adidas Ultra Boost",
        date: "2024-02-20",
        amount: 179.99,
        status: "pending",
    },
    {
        id: "#ORD-003",
        customer: "Mike Johnson",
        product: "Puma RS-X",
        date: "2024-02-19",
        amount: 129.99,
        status: "cancelled",
    },
]

const getStatusColor = (status: OrderData["status"]) => {
    switch (status) {
        case "completed":
            return "success"
        case "pending":
            return "warning"
        case "cancelled":
            return "error"
        default:
            return "default"
    }
}

export default function RecentOrders() {
    return (
        <Card sx={{ p: 3, bgcolor: "background.paper" }}>
            <Typography variant="h6" gutterBottom>
                Recent Orders
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>{order.customer[0]}</Avatar>
                                        {order.customer}
                                    </Box>
                                </TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell align="right">${order.amount.toFixed(2)}</TableCell>
                                <TableCell>
                                    <Chip label={order.status} color={getStatusColor(order.status)} size="small" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

