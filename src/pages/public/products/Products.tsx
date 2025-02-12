import {useGetAllProductsQuery} from "../../../redux/services/productApi.ts";
import {GamingAccessoryCard} from "../../../components/Cart/GamingAccessoryCard.tsx";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import React from "react";
import {Stack} from "@mui/material";

const Products = () => {
    const [page, setPage] = React.useState(1);
    const {currentData}=useGetAllProductsQuery({limit:12,page:page});

    return (
        <Stack justifyContent={"space-between"} alignItems={"center"} spacing={2} pb={8} height={"100%"}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12,lg:12 }}>
                {currentData?.contents?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={12} key={item.id} p={1}>
                        <GamingAccessoryCard
                            title={item.name}
                            description={item.description}
                            price={Number(item.price)}
                            rating={item.rating}
                            link={`products/${item.id}`}
                            image={item?.image!==null?item.image:
                                "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png"}
                            addToCart={()=>{}}/>
                    </Grid>
                ))}
            </Grid>
            <Pagination count={currentData?.totalPages} page={page} onChange={(_e, value) => setPage(value)} />
        </Stack>

    );
};

export default Products;
