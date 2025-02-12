import React, {useState} from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Rating,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {FavoriteBorder, ShoppingCart} from "@mui/icons-material";
import {useGetProductsByIdQuery} from "../../../../../redux/services/productApi.ts";
import {useParams} from "react-router-dom";


export default function ProductCard() {
    const param=useParams();
    const {currentData:product,isLoading,isFetching}=useGetProductsByIdQuery({id:Number(param.id)},{skip:!param.id})
    const [selectedSize, setSelectedSize] = useState<any>();
    const [selectedColor, setSelectedColor] = useState<any>();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleSizeChange = (_event: React.MouseEvent<HTMLElement>, newSize: string) => {
        if (newSize) setSelectedSize(newSize);
    };
    React.useEffect(()=>{
        if(product?.size&&product?.colors){
            setSelectedSize(product?.size[0]??90);
            setSelectedColor(product?.colors[0]??"black")
        }
    },[product,isFetching])
    if(isLoading||isFetching){
        return <> loading ...</>
    }
    return (
        <Card sx={{ width: "100%", maxWidth: "1200px", margin: "auto", p: 2 }}>
            <CardContent>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side: Product Images */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: "relative", width: "100%", textAlign: "center" }}>
                            <img
                                src={product.image??""}
                                alt={product.name??""}
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    borderRadius: "8px",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>

                        {/* Thumbnail Images */}
                        <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 2 }}>
                            {product?.thumbnails?.map(item => (
                                <img
                                    key={item.id}
                                    src={item.image??""}
                                    alt={`Thumbnail ${item.id}`}
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "8px",
                                        border: "2px solid #ddd",
                                        cursor: "pointer",
                                    }}
                                />
                            ))}
                        </Stack>
                    </Grid>

                    {/* Right Side: Product Details */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" sx={{ mb: 2 }}>
                            {product.description}
                        </Typography>

                        {/* Rating */}
                        <Rating value={product.rating} precision={0.5} readOnly sx={{ mb: 2 }} />

                        {/* Colors */}
                        <Typography variant="subtitle1">Select Color</Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                            {product.colors.map((color) => (
                                <Box
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    sx={{
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        backgroundColor: color,
                                        cursor: "pointer",
                                        border: selectedColor === color ? "3px solid black" : "none",
                                    }}
                                />
                            ))}
                        </Stack>

                        {/* Sizes */}
                        <Typography variant="subtitle1">Select Size</Typography>
                        <ToggleButtonGroup value={selectedSize} exclusive onChange={handleSizeChange} sx={{ mb: 3 }}>
                            {product.sizes.map((size) => (
                                <ToggleButton key={size} value={size} sx={{ minWidth: "50px" }}>
                                    {size}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>

                        {/* Price */}
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                            ${product.price}
                        </Typography>

                        {/* Buttons */}
                        <Stack direction={isMobile ? "column" : "row"} spacing={2} sx={{ mb: 2 }}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    flex: 1,
                                    bgcolor: "#ff5722",
                                    "&:hover": { bgcolor: "#f4511e" },
                                }}
                            >
                                BUY
                            </Button>
                           <Stack direction={"row"} justifyContent={'space-evenly'} spacing={isMobile?0:2}>
                               <IconButton sx={{ border: "1px solid gray"}}>
                                   <FavoriteBorder />
                               </IconButton>
                               <IconButton sx={{ border: "1px solid gray"}}>
                                   <ShoppingCart />
                               </IconButton>
                           </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
