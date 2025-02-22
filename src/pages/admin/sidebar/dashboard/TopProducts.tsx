import {Box, Card, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography} from "@mui/material"
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
                        <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
                            <Stack direction="row" spacing={2} alignItems="center" >
                                <ListItemAvatar>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width={56}
                                        height={56}
                                        style={{ borderRadius: 8 }}
                                    />
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
                            </Stack>
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

