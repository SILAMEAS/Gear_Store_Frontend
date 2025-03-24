import {GamingAccessoryCard} from "../../../../components/cart/GamingAccessoryCard.tsx";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import React from "react";
import {Stack} from "@mui/material";
import {useAddCartMutation} from "../../../../redux/services/cartApi.ts";
import {useAddWishlistMutation, useDeleteWishlistMutation} from "../../../../redux/services/wishlistApi.ts";
import {useGetAllProductsQuery} from "../../../../redux/services/productApi.ts";
import {StyleCustom} from "../../../../styles/StyleCustom.tsx";

const GridListProducts = () => {
    const [page, setPage] = React.useState(1);
    const {currentData}=useGetAllProductsQuery({pageSize:10,page:page});
    const [addCart]=useAddCartMutation({});
    const [addWishlist]=useAddWishlistMutation({});
    const [deleteWishlist]=useDeleteWishlistMutation({})


    return (
        <Stack justifyContent={"space-between"} alignItems={"center"} spacing={2} pt={1} height={"100%"} width={"100%"} overflow={"auto"} sx={{...StyleCustom.scrollNormal}}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12,lg:12,xl:12 }} gap={{xl:0.4}}>
                {currentData?.contents?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={1.7} key={item.id} p={1} mx={{xs:5,md:0}}>
                        <GamingAccessoryCard
                            isWishlist={item.isWishlist}
                            title={item.name}
                            description={item.description}
                            price={Number(item.price)}
                            rating={item.avg_rating}
                            link={`products/${item.id}`}
                            image={item?.image!==null?item.image:
                                "https://resource.logitech.com/content/dam/gaming/en/products/astro-a50-x/product-gallery/astro-a50-x-black-gallery-1.png"}
                            addToCart={async ()=>{
                                try {
                                    await addCart({product:item.id}).unwrap()
                                }catch (e){
                                    return e
                                }
                            }}
                            addWishList={async ()=>{
                                try {
                                    if(item.isWishlist) {
                                        await deleteWishlist({product:item.id}).unwrap()
                                    }else{
                                        await addWishlist({product:item.id}).unwrap()
                                    }
                                }catch (e){
                                    return e
                                }
                            }}/>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={currentData?.totalPages} page={page}
                onChange={(_e, value) => setPage(value)}

            />
        </Stack>
    );
};

export default GridListProducts;
