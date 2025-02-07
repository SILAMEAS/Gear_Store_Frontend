import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Box, CardActionArea, CardMedia, IconButton, Rating} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export interface IGamingAccessory {
    image: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    link: string;
}


interface GamingAccessoryCardProps extends IGamingAccessory {
    addToCart: () => void;
}

export const GamingAccessoryCard: React.FC<Readonly<GamingAccessoryCardProps>> = ({
    image,
                                                                            title,
                                                                            description,
                                                                            price,
                                                                            rating,
                                                                            link,
                                                                            addToCart,
                                                                        }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2, display: "flex", flexDirection: "column", height: "100%" }}>
            <CardActionArea component="a" href={link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    component="img"
                    height="fit"
                    image={image}
                    alt="green iguana"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 1 }}>
                        <Typography variant="h6" color="primary">
                            ${price.toFixed(2)} {/* Format price to two decimal places */}
                        </Typography>
                        <Rating name="read-only" value={rating} precision={0.5} readOnly />
                    </Box>
                </CardContent>
            </CardActionArea>
            <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
                <IconButton aria-label="add to cart" onClick={addToCart}>
                    <AddShoppingCartIcon />
                </IconButton>
            </Box>
        </Card>
    );
};
