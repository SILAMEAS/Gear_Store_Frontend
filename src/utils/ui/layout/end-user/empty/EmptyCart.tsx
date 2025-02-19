import {Box, Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const EmptyCart = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 50, color: "#555" }} />
            <Typography variant="h6" mt={2} fontWeight="bold">
                No products in the cart.
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={1}>
                Your cart is currently empty. Let us help you find the perfect item!
            </Typography>
        </Box>
    );
};
export default EmptyCart;
