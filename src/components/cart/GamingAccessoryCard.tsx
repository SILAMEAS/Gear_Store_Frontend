import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Box, CardActionArea, CardMedia, IconButton} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {FavoriteOutlined} from "@mui/icons-material";
import TruncatedText from "@components/text/TruncatedText.tsx";
import Text from "@components/text/Text.tsx";

export interface IGamingAccessory {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    link: string;
    isWishlist:any
}


interface GamingAccessoryCardProps extends IGamingAccessory {
    addToCart: () => void;
    addWishList:()=>void
}

export const GamingAccessoryCard: React.FC<Readonly<GamingAccessoryCardProps>> = ({
    image,
                                                                            title,
                                                                            description,
                                                                            price,
                                                                            link,
                                                                            addToCart,
                                                                                      addWishList,
                                                                                      isWishlist
                                                                        }) => {
    const isWishlistString=typeof isWishlist=="string"
    return (
        <Card sx={{width:"100%", display: "flex", flexDirection: "column", height:"auto",bgcolor:"black",color:"white",border:1,p:"10px",borderRadius:"10px"}}>
            <CardActionArea component="a" href={link} sx={{px:"20px"}}>
                <CardMedia
                    component="img"
                    height={100}
                    image={image}
                    alt="green iguana"
                    sx={{ objectFit: "contain" ,pb:"30px"}}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <TruncatedText text= {title} />
                    <Text variant="body2" color="text.secondary" noWrap>
                        {description}
                    </Text>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 1 }}>
                        <Text color="white">
                            ${price.toFixed(2)} {/* Format price to two decimal places */}
                        </Text>
                        {/*<Rating name="read-only" value={rating} precision={0.5} readOnly/>*/}
                    </Box>
                </CardContent>
            </CardActionArea>
            <Box sx={{ display:isWishlistString?"none": "flex", justifyContent: "flex-end", padding: 1,gap:2 }}>
                <IconButton aria-label="add to cart" onClick={addWishList}>
                    {
                        isWishlist? <FavoriteOutlined sx={{color:"red"}} fontSize={'small'}/>:
                            <FavoriteBorderIcon sx={{color:"white"}}  fontSize={'small'}/>
                    }
                </IconButton>
                <IconButton aria-label="add to cart" onClick={addToCart}>
                    <AddShoppingCartIcon  sx={{color:"white"}} fontSize={'small'}/>
                </IconButton>
            </Box>
        </Card>
    );
};
