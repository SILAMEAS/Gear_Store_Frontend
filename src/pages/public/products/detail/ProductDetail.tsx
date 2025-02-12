import {Stack} from "@mui/material";
import ProductCard from "./components/ProductCard.tsx";

const ProductDetail = () => {
    return (
        <Stack justifyContent={"center"} alignItems={"center"}  >
            <ProductCard/>
        </Stack>
    );
};

export default ProductDetail;
