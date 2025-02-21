import { Card, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from "@mui/material"
import {ProductData} from "./types.ts";

export default function TopProducts({products}:{products:ProductData[]}) {
    return (
        <Card sx={{ p: 3, bgcolor: "background.paper" }}>
            <Typography variant="h6" gutterBottom>
                Top Selling Products
            </Typography>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id} divider>
                        <ListItemAvatar>
                            <Avatar variant="rounded" src={product.image} alt={product.name} sx={{ width: 56, height: 56, mr: 2 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name}
                            secondary={
                                <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.sold} sold
                                    </Typography>
                                    <Typography variant="body2" color="primary">
                                        ${product.revenue.toLocaleString()}
                                    </Typography>
                                </Box>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

