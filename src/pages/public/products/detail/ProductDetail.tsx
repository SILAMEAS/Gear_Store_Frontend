import {Stack} from "@mui/material";
import ProductCard from "./components/ProductCard.tsx";
import {useGetAllProductsQuery} from "../../../../redux/services/productApi.ts";
import Product from "./components/Product.tsx";

const ProductDetail = () => {
    const {currentData}=useGetAllProductsQuery({limit:5,page:1});
    return (
        <Stack justifyContent={"center"} alignItems={"center"} overflow={"hidden"} >
            <ProductCard/>
            <Stack mx={"auto"}>
                <h2>You may also like</h2>
                <Stack  direction={"row"} overflow={"auto"} maxWidth={"100%"}>
                    {currentData?.contents?.map((item) => (
                        <Product key={item.id} {...item}/>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ProductDetail;
