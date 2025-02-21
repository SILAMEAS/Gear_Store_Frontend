import {
    Avatar,
    Box,
    Card,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material"
import {OrderData} from "./types.ts";
import {getStatusColor} from "../../../../utils/common/getStatusColor.ts";


export default function RecentOrders({ orders}:{ orders: OrderData[]}) {
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

